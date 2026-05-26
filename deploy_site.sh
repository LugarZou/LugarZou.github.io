#!/usr/bin/env bash

set -euo pipefail

REMOTE="${1:-origin}"
BRANCH="$(git branch --show-current)"

if [[ -z "${BRANCH}" ]]; then
  echo "Could not determine the current git branch."
  exit 1
fi

echo "Repository status:"
git status --short
echo

read -r -p "Proceed with build, push ${BRANCH} to ${REMOTE}, and deploy the site? [y/N] " proceed
if [[ ! "${proceed}" =~ ^[Yy]$ ]]; then
  echo "Aborted."
  exit 0
fi

if [[ -n "$(git status --porcelain)" ]]; then
  read -r -p "Stage all changes and create a commit before deploy? [y/N] " should_commit
  if [[ "${should_commit}" =~ ^[Yy]$ ]]; then
    read -r -p "Commit message: " commit_message
    if [[ -z "${commit_message}" ]]; then
      echo "Commit message cannot be empty."
      exit 1
    fi
    git add -A
    git commit -m "${commit_message}"
  else
    echo "Continuing without creating a new commit."
  fi
fi

echo
echo "Building site..."
npm run build

echo
echo "Pushing source branch ${BRANCH} to ${REMOTE}..."
git push "${REMOTE}" "${BRANCH}"

echo
echo "Deploying site..."
npm run deploy

echo
echo "Done."
