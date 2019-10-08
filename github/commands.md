# Initializes a local GitHub repo in your project folder

    $> git init


# Check the status of changed/staged/commited files and folders

    $> git status

    * if the terminal response is 'red' that data is unstaged

    * if the terminal response is 'green' that data is staged


# Add the modified files to the staging area 

    $> git add .
    $> git add -A 


# Commit changes (don't forget to add a useful message)

    $> git commit -m "something useful about what you did"


# To see which remote servers you have configured,

    $> git remote -v


# Add a remote to your git connected project

    $> git remote add [shortname] [url]:


# Pushing to your remotes

    $> git push [remote-name] [branch-name]

    $> git push origin master

    $> git push -u origin master


# Cloning an existing repo

    $> git clone [url]


# Pull new data from repo

    $> git pull


# Viewing the Commit History

    $> git log


# Check and see what branches we have in our project

    $> git branch

# Create a new branch

    $> git branch testing


# Move over to start working on the new branch

    $> git checkout testing

    $> git checkout -b testing


# Check and see what branches we have in our project

    $> git branch


# Delete a branch we are finished working on

    $> git branch -d [branch-name]


# Merge the testing branch with the master branch

    $> git checkout master
    $> git merge testing


