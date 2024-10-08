CREATE TABLE EMPLEADO (
  ID SERIAL PRIMARY KEY,
  FECHA_INGRESO DATE,
  NOMBRE VARCHAR(50),
  SALARIO NUMERIC
);

CREATE TABLE SOLICITUD (
  ID SERIAL PRIMARY KEY,
  CODIGO VARCHAR(50),
  DESCRIPCION VARCHAR(50),
  RESUMEN VARCHAR(50),
  ID_EMPLEADO INTEGER,
  FOREIGN KEY (ID_EMPLEADO) REFERENCES EMPLEADO(ID)
);

CREATE TABLE usuario (
  usua_idusws SERIAL PRIMARY KEY,
  usua_idempr INTEGER,
  usua_esttra VARCHAR(50),
  usua_idsesi INTEGER,
  usua_usuari VARCHAR(50),
  usua_contra TEXT
);

select * from usuario
select * from EMPLEADO
select * from SOLICITUD