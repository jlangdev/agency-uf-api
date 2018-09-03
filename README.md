To clone and use:

$ git clone https://github.com/jlangdev/agency-uf-api.git

$ git checkout -b [name_of_your_working_branch]

$ git pull origin master

$ npm install

add a file to root directory called '.env' then holler at me on slack to get the vars to put in there

$ npm run start

agency-uf-api listening on port:4001



To add new routes:
    use src/resources/v1/_base to model routes and schema
    add the route to index js imports and routeChain parameter array
