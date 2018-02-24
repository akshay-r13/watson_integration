# Hasura - Watson Natural Language Classifier and Sentiment Analysis

Watson natural language processing to analyze semantic features of any text. Provide plain text, HTML, or a public URL, and Natural Language Understanding returns results for the features you specify. We are using Hasura Platform to host the project on the cloud.


## Documents

* **React Native** - [React Native README.md](https://github.com/AkshayRaman97/watson_integration/blob/master/React-Native/README.md) 
* **React JS** - [React JS README.md](https://github.com/AkshayRaman97/watson_integration/blob/master/microservices/web/app/README.md) 
- **To test the project on web browser -** [https://web.quantifier67.hasura-app.io/](https://web.quantifier67.hasura-app.io/) 

## Setting up your hasura cluster

In order to host our project on the cloud for everyone to see we'll use the `hasura` platform.
Follow the instructions in this section to setup a cluster to which you can push your project folder.

### Install `hasura-cli`.

We'll need to install the hasura command line interface to use the hasura platform. To install use

```bash
$ curl -L https://hasura.io/install.sh | bash
```

To check if it successfully installed use

```bash
$ hasura version


hasura version: v0.2.45
```

### Login to hasura

Create an account or login to hasura using

```bash
$ hasura login
```
Your browser will open a link where you can register or login to hasura.

### Create a cluster

To create a cluster you can use the hasura free tier system.

```bash
$ hasura cluster create --type=free


INFO Creating a Hasura cluster...
INFO Hasura cluster created                        cluster=quantifier67
INFO Initializing the cluster...
INFO Cluster initialized
INFO Kubernetes context has been added to this system  context=quantifier67
```

Note your cluster name. In this case it is `quantifier67`.

### Add cluster to your project

To add a cluster to this project use the following commands.

```bash
# Add cluster
$ hasura cluster add quantifier67 -c hasura

# Set this cluster as the default
$ hasura cluster set-default hasura

# Add ssh-key
$ hasura ssh-key add -c hasura
```

### Pushing your code to the cluster

Follow the below steps.

```bash
# Go to your project folder
$ cd /home/user/projects/watson_integration

# Add all files for commit
$ git add .

# Commit files
$ git commit -m "First commit"

# Push to hasura cluster
$ git push hasura master
```
This will take some time to execute. After it is done use the following command to view your app.

```bash
# To view the api microservice
$ hasura microservice open api

# To view the app microservice
$ hasura microservice open app
```
Your application is now viewable to anyone with the link to your microservice.

>For more info on managing clusters and hosting your project refer to the [hasura documentation](https://docs.hasura.io/0.15/manual/cluster/index.html).

## Contributors ( Team T23-PF1)
* **Zunaid Sorathiya** - [Github profile](https://github.com/zedunaid) (React-Native)
* **Akshay Raman** - [Github profile](https://github.com/AkshayRaman97) (React-JS + Python-Flask)
* **Pavan Bellamkonda** (Python-Flask)
