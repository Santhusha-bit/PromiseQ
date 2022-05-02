### About the Project

This project contains promiseQ homepage built with Next.js and deployed on Firebase.

### Getting Started

Following are the instructions on setting up and running the project locally.

#### Installation

1. Clone the repo:

```bash
git clone git@gitlab.com:aoye/home_page_redesign.git
```

2. Install npm node modules:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Steps to deploy Production Build on Firebase

The following are the instructions to deply the project as a static site. 

1. Init firebase:

```bash
firebase init hosting  # select /out as your hosting directory
```

2. Buid the project

```bash
npm run build
```

3. Export files to hosting directory

```bash
npm run export
```

4. Deploy on Firebase

```bash
firebase deploy --only hosting
```

The project has already been deployed on Firebase.

Links: 
* https://promiseq-homepage.web.app/
* https://promiseq-homepage.firebaseapp.com/


### Steps to deploy Development Build on Firebase

The following are the instructions to deply the project as a static site. 

1. Delete firebaserc & firebase.json files 

2. Init firebase:

```shell
firebase init hosting  
# select Use an existing project
# select promiseq-homepage-develop (promiseq-homepage-develop)
# select /out as your hosting directory
```

3. Buid the project

```shell
npm run build
```

4. Export files to hosting directory

```shell
npm run export
```

5. Deploy on Firebase

```shell
firebase deploy --only hosting
```

The project has already been deployed on Firebase.

Links:

* Project Console: https://console.firebase.google.com/project/promiseq-homepage-develop/overview
* Hosting URL: https://promiseq-homepage-develop.web.app
