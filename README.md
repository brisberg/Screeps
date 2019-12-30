# Screeps (Deprecated)
AI Code for the Screeps MMO

*Deprecated* 12/2019 in favor of a new Screeps AI initiative - [Amber](https://github.com/brisberg/amber).

### Deploy to Screeps

Install `gulp-cli` globally:
```
npm install -g gulp-cli
```

Then install dependencies:
```
npm install
```

#### Screep credentials

Add a new file to your project: `config/screeps-creds.js`

```
module.exports = {
    email: '<Your Email>',
    password: '<You Password>',
    branch: 'default',
    ptr: false,
    project: 'src'
};
```
**Note:** `branch`, `ptr`, and 'project' specify default values and can be set to anything you like.

**Important:** Ensure that this file is ignored in the `.gitignore` file to avoid committing your
credentials to GitHub.

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
