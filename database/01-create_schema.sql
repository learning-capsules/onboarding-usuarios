CREATE TABLE IF NOT EXISTS tipo_aprendizaje (
    id_tipo_aprendizaje SERIAL PRIMARY KEY,
    tipo_aprendizaje VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad INT NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    id_tipo_aprendizaje INT REFERENCES tipo_aprendizaje(id_tipo_aprendizaje) ON DELETE CASCADE
);

CREATE TABLE videos (
    id_video SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    url VARCHAR(1024) NOT NULL,
    id_tipo_aprendizaje INT REFERENCES tipo_aprendizaje(id_tipo_aprendizaje) ON DELETE CASCADE
);

CREATE TABLE comments (
    id_comentario SERIAL PRIMARY KEY,
    comment VARCHAR(255),
    id_youtube_video varchar(255),
    id_usuario INT REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    username varchar(255),
    lastname varchar(255)
)