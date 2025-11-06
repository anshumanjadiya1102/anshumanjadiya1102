# Quick Setup Guide for Waka-Readme Workflow

## 🚀 Quick Start

Your Waka-Readme workflow has been fixed and is ready to use! Follow these simple steps:

### 1️⃣ Get Your WakaTime API Key
1. Sign up or log in at [WakaTime](https://wakatime.com/)
2. Go to [Settings → API Key](https://wakatime.com/settings/account)
3. Copy your API key (starts with `waka_`)

### 2️⃣ Add Secret to GitHub
1. Go to your repo **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `WAKATIME_API_KEY`
4. Value: Paste your WakaTime API key
5. Click **Add secret**

### 3️⃣ Run the Workflow
1. Go to **Actions** tab
2. Click **Waka Readme** workflow
3. Click **Run workflow** → **Run workflow**
4. Wait ~30 seconds for it to complete
5. Check your README - stats will appear between the waka markers!

## ✅ What Was Fixed

- ✅ Removed invalid parameters (`TIME_RANGE`, `SHOW_TIME`)
- ✅ Fixed token issue (now uses built-in `GITHUB_TOKEN`)
- ✅ Added write permissions for the workflow
- ✅ The waka section markers are already in your README.md (lines 217-218)

## 📚 Full Documentation

For detailed documentation, troubleshooting, and configuration options, see:
👉 [Complete Setup Guide](.github/workflows/WAKA_README_SETUP.md)

## ⚠️ Important Note

You MUST add the `WAKATIME_API_KEY` secret (Step 2) for the workflow to work. Without it, the workflow will fail.

## 🎯 What You'll Get

Once set up, your README will automatically update daily with:
- 📊 Programming languages you use with percentages
- ⏱️ Time spent coding per language
- 📁 Projects you're working on
- 📅 Coding activity by day of week
- 💻 Lines of code statistics

The stats will appear in your README between these markers (already present at line 217-218):
```markdown
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
```
