
INSERT INTO tipo_aprendizaje (tipo_aprendizaje) 
VALUES 
('visual'), 
('auditivo'), 
('readwrite'), 
('kinesico'),
('multimodal');

INSERT INTO usuarios (nombre, apellido, edad, correo, password, id_tipo_aprendizaje) 
VALUES 
('Juan', 'Perez', 25, 'juan.perez@email.com', '$2a$10$mRlbldZrguZCV3UmLHBHm.ScYmyPm80lb8I6qut.RphMLUTpJ3Ocm', 1); 

INSERT INTO videos (nombre, url, id_tipo_aprendizaje) 
VALUES 
('Gotham Chess', 'PLBRObSmbZluTpMdP-rUL3bQ5GA8v4dMbT', 1); 


INSERT INTO videos (nombre, url, id_tipo_aprendizaje) 
VALUES 
('Space', 'PLtmEbU5mNGcE4_qQEsI3QRRnZHggPddoA', 2); 


INSERT INTO videos (nombre, url, id_tipo_aprendizaje) 
VALUES 
('Megadeth', 'PLTrBj5edGdF92qJXQ0FzYETBRX4_Uz2ZJ', 3); 


INSERT INTO videos (nombre, url, id_tipo_aprendizaje) 
VALUES 
('Veritasium', 'PL3iich1g8QJKar6ZlL9yNLMrORJi-shNK', 4); 


INSERT INTO videos (nombre, url, id_tipo_aprendizaje) 
VALUES 
('Smarter Every Day', 'PLSjB_MuAP1X_Rw6kaecFxSsZmV9HZdFbj', 5); 


