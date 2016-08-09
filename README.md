# Screeps
AI Code for the Screeps MMO

### Deploy to Screeps

Install `gulp-cli` globally:
```
npm install -g gulp-cli
```

#### Screep credentials

Add a new file to your project: `config/screeps-creds.js`

```
module.exports = {
    email: '<Your Email>',
    password: '<You Password>',
    branch: 'default',
    ptr: false
};
```
**Note:** `branch` and `ptr` specify default values and can be set to anything you like.

**Important:** Ensure that this file is ignored to avoid committing your credentials to GitHub by
adding `/config/screeps-creds.js` to your `.gitignore` file.

#### Deploy with Grunt

To deploy your default branch on Screeps.com, run:

```
gulp screeps
```

Or, to deploy to a specific branch:

```
gulp screeps --branch=mybranch
```

**Note:** You must create the branch on Screeps first before you can deploy to it

To deploy to the PTR, add the `--ptr` option:

```
gulp screeps --branch=test1 --ptr
```
