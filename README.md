![Image](/src/ressources/Screenshot 2019-10-02 at 16.39.51.png)

# Master-Password

- Exercise with node to write, save and delete passwords within the command shell.
- Master password is required to execute functions.
- Master password is encrypted via node built-in crypto
- Master password is required to read and set passwords

## First start

You need to generate a master password, which is used to encrypt the secrets. The hashed password is saved in a file called `.password`

```
node src/createHash.js YOUR_MASTER_PASSWORD
```

## Usage

There are three commands: `set`, `unset` and `get`
Secrets are saved by a KEY, which is unique.

### set

Use `set` to add or update a secret:

```
node src/app.js add KEY VALUE
```

### unset

Use `unset` to remove a secret:

```
node src/app.js unset KEY
```

### get

User `get` to receive a secret:

```
node src/app.js get KEY
```
