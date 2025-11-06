# Waka-Readme Workflow Setup Guide

This guide explains how to set up and configure the Waka-Readme workflow in your GitHub profile repository.

## Overview

The Waka-Readme workflow automatically updates your GitHub profile README with your WakaTime coding statistics. It displays:
- Programming languages you use
- Time spent coding
- Projects you're working on
- Lines of code written
- Days of the week coding activity

## Prerequisites

1. **WakaTime Account**: You need a WakaTime account to track your coding activity
   - Sign up at: https://wakatime.com/
   - Install WakaTime plugin in your code editor (VS Code, IntelliJ, etc.)

2. **GitHub Profile Repository**: This workflow should be in your profile repository (username/username)

## Setup Instructions

### Step 1: Get Your WakaTime API Key

1. Log in to your WakaTime account at https://wakatime.com/
2. Go to Settings: https://wakatime.com/settings/account
3. Scroll down to find your **API Key** (it looks like: `waka_xxx...`)
4. Copy this API key - you'll need it in the next step

### Step 2: Add the WakaTime API Key to GitHub Secrets

1. Go to your GitHub profile repository (https://github.com/YOUR_USERNAME/YOUR_USERNAME)
2. Click on **Settings** tab
3. In the left sidebar, click on **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add the following secret:
   - **Name**: `WAKATIME_API_KEY`
   - **Value**: Your WakaTime API key from Step 1
6. Click **Add secret**

### Step 3: Add Waka Markers to Your README.md

Add these comment markers to your README.md file where you want the WakaTime stats to appear:

```markdown
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
```

The workflow will automatically insert your coding stats between these markers.

**Example placement in README.md:**

```markdown
## 📊 My Coding Stats

<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
```

### Step 4: Verify Workflow Configuration

The workflow file `.github/workflows/Waka-readme.yml` should already be configured correctly. It includes:

- **Schedule**: Runs daily at midnight IST / 6:30 PM UTC (cron: '30 18 * * *')
- **Manual trigger**: Can be run manually via "workflow_dispatch"
- **Permissions**: Has write access to update the repository
- **Token**: Uses GitHub's built-in `GITHUB_TOKEN` automatically

### Step 5: Run the Workflow

#### Option A: Wait for Automatic Run
The workflow will run automatically based on the schedule (daily at 12 AM IST).

#### Option B: Manual Run (Recommended for First Time)
1. Go to the **Actions** tab in your repository
2. Click on **Waka Readme** in the left sidebar
3. Click the **Run workflow** dropdown button
4. Click **Run workflow** to start it immediately
5. Wait for the workflow to complete (usually takes 20-30 seconds)
6. Check your README.md - it should now have your WakaTime stats!

## Configuration Options

The workflow is configured with the following options (in `.github/workflows/Waka-readme.yml`):

| Option | Value | Description |
|--------|-------|-------------|
| `SECTION_NAME` | `waka` | Section identifier in README |
| `SHOW_LINES_OF_CODE` | `True` | Display total lines of code |
| `SHOW_PROJECTS` | `True` | Show projects you're working on |
| `SHOW_LANGUAGE` | `True` | Display programming languages |
| `SHOW_LANGUAGE_PER_REPO` | `True` | Show language breakdown per repository |
| `SHOW_DAYS_OF_WEEK` | `True` | Display coding activity by day of week |
| `SHOW_TOTAL_CODE_TIME` | `False` | Don't show total coding time |
| `SHOW_PROFILE_VIEWS` | `False` | Don't show profile views |
| `SHOW_SHORT_INFO` | `False` | Don't show short info |
| `SHOW_LOC_CHART` | `False` | Don't show lines of code chart |
| `LOCALE` | `en` | Language for stats display |

You can customize these options by editing the workflow file.

## Troubleshooting

### Workflow Fails with "AssertionError"
- **Issue**: Missing WakaTime API key
- **Solution**: Make sure you've added `WAKATIME_API_KEY` to your repository secrets (see Step 2)

### Stats Not Appearing in README
- **Issue**: Missing waka section markers
- **Solution**: Add `<!--START_SECTION:waka-->` and `<!--END_SECTION:waka-->` to your README.md (see Step 3)

### Workflow Runs but No Updates
- **Issue**: WakaTime not tracking your coding activity
- **Solution**: 
  - Verify WakaTime plugin is installed in your code editor
  - Check that WakaTime is running (look for WakaTime icon in your editor)
  - Code for at least a few minutes to generate data
  - Wait for WakaTime to sync (may take up to an hour)

### Permission Denied Error
- **Issue**: Workflow doesn't have permission to update README
- **Solution**: The workflow already includes `permissions: contents: write` which should resolve this

## Additional Resources

- WakaTime Documentation: https://wakatime.com/help
- GitHub Actions Documentation: https://docs.github.com/en/actions
- Waka-Readme-Stats Action: https://github.com/anmol098/waka-readme-stats

## Example Output

Once configured, your README will display something like:

```
📊 My Coding Stats

<!--START_SECTION:waka-->
```text
JavaScript   8 hrs 30 mins   ████████████░░░░░░░░░   48.2%
Python       4 hrs 15 mins   ██████░░░░░░░░░░░░░░░   24.1%
Java         3 hrs 45 mins   █████░░░░░░░░░░░░░░░░   21.3%
HTML/CSS     1 hr 10 mins    █░░░░░░░░░░░░░░░░░░░░    6.4%
```
<!--END_SECTION:waka-->
```

## Support

If you encounter any issues:
1. Check the workflow run logs in the Actions tab
2. Verify all secrets are correctly set
3. Make sure the waka section markers are in your README
4. Ensure WakaTime is actively tracking your coding time
