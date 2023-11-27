##Authentication vs Authorization
#middleware Authentication
##bcrypt
#password hashing - se usa bcrypt, debería guardarse en la bd el hash en vez de la password innata
#verify password - se usa compare para comparar la password vs el hash
##passport
#passport tiene muchas estrategias (auth con google, Facebook, etc) en este caso, usó passport-local
#create local strategy (lógica propia)
#implementación de strategy
##JWT
#Que es JWT y por qué usarlo (stateless, fácil uso en multiplataformas)
#Qué conforma el JWT (header, payload, verify signature)
#Firmar y verificar jwt (keygen.io para crear secrets)
#debugger pagina jwt (en el payload no se guarda info importante, solo info para identificar como id o roles)
#refresh token
#passport-jwt y crear JwtStrategy
##Control de Roles
#middleware para manejo de roles
##Envío de correos con nodemailer
##configuración de nodemailer con smtp (gmail)
##implementación de envío de emails para recuperación o A2F
##tokens de recuperación por medio de jwt
