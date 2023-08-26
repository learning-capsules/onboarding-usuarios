
INSERT INTO tipo_aprendizaje (tipo_aprendizaje) 
VALUES 
('visual'), 
('auditivo'), 
('orientado a problemas'), 
('kinesico');

INSERT INTO usuarios (nombre, apellido, edad, correo, password, id_tipo_aprendizaje) 
VALUES 
('Juan', 'Perez', 25, 'juan.perez@email.com', 'encrypted_password', 1); 

INSERT INTO videos (nombre, url, id_tipo_aprendizaje) 
VALUES 
('Learning Styles Explained', 'https://example.com/video1', 1); 

