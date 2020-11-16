Saturday:
  Current working endpoints:
    "/auth/register" requires username password and usertype
    "/auth/login" requires username and password. doesnt return the user type yet

sunday: 
  current working endpoints:
    "/api/auth/register" requires username password usertype and country
    "/api/auth/login" requires username and password. returns a key and the user type of the person who logged in.
    "/api/users/volunteers" making a get request to this endpoint with a key will return all registered users of the 'volunteer' type.
    roughly half of all endpoints are done at this time. Hopefully all endpoints will be done tomorrow and this backend will be ready to be deployed.
