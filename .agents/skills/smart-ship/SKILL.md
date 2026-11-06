---
name: smart-ship
description: >-
  Automates pre-commit hygiene, production build verification, atomic English Conventional Commits (v1.0.0), GitHub remote setup & push, and production deployment to Vercel. Activate this skill when the user asks to commit, push, ship, release, or deploy a repository.
---

# Smart Ship — Automated Atomic Commits, GitHub Push & Vercel Deploy

Follow this five-stage workflow to safely validate, commit, push, and deploy changes without manual intervention.

---

## Stage 1: Pre-Commit Hygiene & Build Verification

1. **Inspect & Enforce `.gitignore`**:
   - Verify `.gitignore` exists and explicitly excludes:
     - `node_modules/`
     - `dist/`
     - `.vercel/`
     - `.DS_Store`
     - `.env*`
   - Update `.gitignore` immediately if any of these entries are missing, and unstage any ignored files (`git rm -r --cached <path>` if tracked).

2. **Verify Zero-Error Production Build**:
   - Execute `npm run build` to run strict TypeScript typechecking (`tsc -b`) and the production bundler (`vite build`).
   - **Validation**: Do not proceed with commits until `npm run build` exits with code `0`. Fix any compilation or type errors first.

---

## Stage 2: Atomic & Semantic Commits in English (Conventional Commits 1.0.0)

1. **Inspect Repository State**:
   - Run `git status --short` and `git diff` (or inspect untracked files) to understand all pending modifications.
   - Ensure the default branch is `main` (`git branch -M main` if needed).

2. **Group by Logical Responsibility**:
   - Never create a single monolithic commit when changes span distinct responsibilities.
   - Stage and commit logical units separately, for example:
     - `chore(config)`: project configuration, build toolchain, TypeScript, Tailwind, `.gitignore`, and agent skills.
     - `feat(types)` / `feat(data)` / `feat(i18n)`: core contracts, bilingual dataset (`PT-BR` / `EN-US`), and localization context.
     - `feat(ui)`: foundational design system primitives, motion presets, custom hooks, and global styles.
     - `feat(header)` / `refactor(header)` / `feat(hero)`: navigation bar, command palette, and interactive hero terminal.
     - `feat(projects)`: case studies showcase, interactive architecture modal, Bento engineering matrix, and experience timeline.
     - `docs(gemini)`: architectural documentation (`GEMINI.md`) and technical assets.

3. **Enforce Commit Message Format (Strictly in English)**:
   - **Header**: `<type>(<scope>): <imperative summary in lowercase up to 72 chars>`
     - Allowed types: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `chore`, `build`, `ci`, `test`.
     - No trailing period in the header.
   - **Body**: Blank line after header, followed by concise technical bullet points (`- ...`) explaining **what** changed and **why**.
   - **Prohibition**: Never add `Co-Authored-By`, `Signed-off-by`, or automated agent signatures.

---

## Stage 3: GitHub Remote & Automated Push

1. **Check Existing Remote**:
   - Run `git remote -v` to check if `origin` is configured.
2. **Push or Provision Repository**:
   - **If `origin` exists**: Run `git push -u origin main` (or the active branch).
   - **If `origin` does NOT exist**:
     - Check if GitHub CLI (`gh`) is installed and authenticated (`gh auth status`).
     - If authenticated, create the public repository and push automatically:
       ```bash
       gh repo create saviopatrick-portfolio --public --source=. --remote=origin --push
       ```
     - If `gh` is not installed, extract the GitHub token from `git credential-osxkeychain get` and provision the public repository via the GitHub REST API (`POST https://api.github.com/user/repos`), add `origin`, and run `git push -u origin main`.

---

## Stage 4: Production Deployment on Vercel

1. **Verify Vercel Authentication**:
   - Run `npx --yes vercel whoami` to check if the Vercel CLI is accessible and authenticated.
2. **Deploy or Provide Ready Command**:
   - **If authenticated**: Run `npx --yes vercel --prod --yes` to deploy the production build and capture the generated public URL.
   - **If interactive login is required**: Run `npx --yes vercel deploy --temporary --yes` to publish an immediate live URL + claim link, and also display `npx vercel login && npx vercel --prod --yes` for permanent CLI authentication.

---

## Stage 5: Final Executive Report

Upon completion, always display:
1. **Commit Graph**: Output of `git log --oneline --graph -n 10`.
2. **GitHub Repository Link**: Direct URL to the remote repository (or status/command if offline/unauthenticated).
3. **Vercel Production URL**: Direct live production URL (or the ready `npx vercel --prod` command if awaiting first-time CLI login).
