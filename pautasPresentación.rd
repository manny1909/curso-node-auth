**Authentication vs Authorization
*middleware Authentication
**bcrypt
*password hashing - se usa bcrypt, debería guardarse en la bd el hash en vez de la password innata
*verify password - se usa compare para comparar la password vs el hash
**passport
*passport tiene muchas estrategias (auth con google, Facebook, etc) en este caso, usó passport-local
*create local strategy (lógica propia)
