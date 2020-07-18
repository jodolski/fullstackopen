#!/bin/bash
# This Bash script will request a Git commit message from the user and assign it to a variable.
# The variable will be used as the message for the actual Git commit code.

echo "Please enter your commit message."
read commitMessage
if [ -z "$commitMessage" ]; then
    echo "Unable to commit without a message."
else
    git add -A
    git commit -m "$commitMessage"
    git push -u origin master
fi