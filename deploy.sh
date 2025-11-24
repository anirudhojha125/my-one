#!/bin/bash
# Deployment script for the Interactive Valentine's Day Website

echo "=== Interactive Valentine's Day Website Deployment ==="
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
  echo "Error: Not in a git repository"
  exit 1
fi

echo "Current git status:"
git status
echo ""

echo "=== To deploy this website to a remote repository ==="
echo ""
echo "1. Create a new repository on your preferred git hosting service (GitHub, GitLab, etc.)"
echo "2. Get the repository URL (HTTPS or SSH)"
echo "3. Add the remote origin:"
echo "   git remote add origin YOUR_REPOSITORY_URL"
echo "4. Push the code:"
echo "   git push -u origin master"
echo ""
echo "=== To run the website locally ==="
echo ""
echo "1. Navigate to the project directory:"
echo "   cd interactive_website"
echo "2. Start a simple HTTP server:"
echo "   python -m http.server 8000"
echo "3. Open your browser and go to http://localhost:8000"
echo ""
echo "=== Project Structure ==="
echo ""
ls -la