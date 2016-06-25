# Screeps
AI Code for the Screeps MMO

### Deploy to Screeps

#### Screep credentials

Add a new file to your project: `config/screeps-creds.json`

```
{
  "email": "<Your Email>",
  "password": "<Your Password>"
}
```

Ensure that file is ignored to avoid committing your credentials to GitHub.

#### Deploy with Grunt

To deploy the the `default` branch on Screeps.com, run:

```
grunt screeps
```

Or, to deploy to a specific branch:

```
grunt screeps --branch=mybranch
```