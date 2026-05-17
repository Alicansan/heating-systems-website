# GitHub Setup Guide

## Prerequisites

1. Install Git for Windows if not already installed: https://git-scm.com/download/win
2. Create a GitHub account if you don't have one: https://github.com

## Steps to Push to GitHub

### 1. Open PowerShell or Command Prompt in the project directory

```powershell
cd C:\Users\alica\Desktop\heating-systems-website
```

### 2. Initialize Git repository (if not already initialized)

```powershell
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 3. Add all files

```powershell
git add .
```

### 4. Create initial commit

```powershell
git commit -m "Initial commit: Turkish heating systems website with SEO optimization, hero slider, brand colors, and catalog viewer"
```

### 5. Create a new repository on GitHub

- Go to https://github.com/new
- Name it: `heating-systems-website`
- Add description: "Premium industrial heating, plumbing, and radiator systems website built with Next.js, TypeScript, and Tailwind CSS"
- Choose Public or Private
- Click "Create repository"

### 6. Add remote and push

Replace `YOUR_USERNAME` with your GitHub username:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/heating-systems-website.git
git branch -M main
git push -u origin main
```

### 7. Verify

Visit `https://github.com/YOUR_USERNAME/heating-systems-website` to confirm the push was successful.

---

## Project Summary

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Next/Image

**Features:**
- Full Turkish translation with tr-TR SEO optimization
- Automatic hero image carousel slideshow
- Brand colors (#e95a0d, #037db1, #1c355e)
- Interactive product catalog with search/filter
- Modal product detail viewer
- Smooth scroll navigation
- Contact section with Phone & WhatsApp links
- Fully responsive mobile-first design
- Pre-optimized for Turkish Google search

**Sections:**
- Hero with auto-scrolling background images
- Services (5 service offerings)
- About us with capabilities
- Product showcase
- Full catalog with search
- Contact with direct phone/WhatsApp

**Build Status:** ✓ Production ready
