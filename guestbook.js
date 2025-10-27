module.exports = async ({ github, context }) => {
  // Define GraphQL query for comments
  const query = `
    query($owner: String!, $name: String!, $issue_number: Int!) {
      repository(owner: $owner, name: $name) {
        issue(number: $issue_number) {
          comments(first: 30, orderBy: { direction: DESC, field: UPDATED_AT }) {
            nodes {
              author {
                avatarUrl(size: 48)
                login
                url
              }
              url
              bodyText
              updatedAt
            }
          }
        }
      }
    }
  `;

  const variables = {
    owner: context.repo.owner,
    name: context.repo.repo,
    issue_number: context.issue.number,
  };

  // Fetch comments using GitHub GraphQL API
  const result = await github.graphql(query, variables);

  // Render Markdown table for guestbook
  const renderComments = (comments) => {
    if (!comments.length) {
      return "_No guestbook entries yet — be the first to comment!_";
    }

    return comments.reduce((prev, curr) => {
      // Sanitize text
      let sanitizedText = curr.bodyText
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\|/g, "&#124;")
        .replace(/\[/g, "&#91;")
        .replace(/\r?\n|\r/g, "<br />");

      return (
        prev +
        `| [<img src="${curr.author.avatarUrl}" alt="${curr.author.login}" width="48" /><br />${curr.author.login}](${curr.author.url}) | ${new Date(curr.updatedAt).toLocaleString()}<br />[🔗 View Comment](${curr.url}) | ${sanitizedText} |\n`
      );
    }, "| 👤 **User** | 🕓 **Date** | 💬 **Message** |\n|---|---|---|\n");
  };

  const fs = require("fs");
  const path = "./README.md";
  const readme = fs.readFileSync(path, "utf8");

  const comments = result.repository.issue.comments.nodes;
  const table = renderComments(comments);

  // Replace the Guestbook section inside README
  const start = "<!-- Guestbook -->";
  const end = "<!-- /Guestbook -->";
  const regex = new RegExp(`(?<=${start}.*\\n)[\\s\\S]*?(?=${end}|$(?![\\n]))`, "gm");

  const updated = readme.replace(regex, table);
  fs.writeFileSync(path, updated, "utf8");

  console.log("✅ Guestbook updated successfully in README.md");
};
