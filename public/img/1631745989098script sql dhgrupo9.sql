/*
ALTER TABLE "producto" DROP CONSTRAINT "FK_producto_categoria";
ALTER TABLE "compra_producto" DROP CONSTRAINT "FK_mpra_producto_producto";
ALTER TABLE "compra_producto" DROP CONSTRAINT "FK_mpra_producto_usuario";
ALTER TABLE "venta_producto" DROP CONSTRAINT "FK_enta_producto_producto";
ALTER TABLE "venta_producto" DROP CONSTRAINT "FK_enta_producto_usuario";
DROP TABLE "producto" PURGE;
DROP SEQUENCE "SQ_producto";
DROP TABLE "usuario" PURGE;
DROP SEQUENCE "SQ_usuario";
DROP TABLE "compra_producto" PURGE;
DROP SEQUENCE "SQ_compra_producto";
DROP TABLE "venta_producto" PURGE;
DROP SEQUENCE "SQ_venta_producto";
DROP TABLE "categoria" PURGE;
DROP SEQUENCE "SQ_categoria";
-- */

-------------------------------------------------------------------------------
--            producto
-------------------------------------------------------------------------------

CREATE TABLE "producto" (
    "id"                              INTEGER
  , "titulo"                          VARCHAR(50)         NOT NULL
  , "precio"                          INT(100)            NOT NULL
  , "descuento"                       INT(40)
  , "img"                             VARCHAR(70)         NOT NULL
  , "categoria_fk"                    INTEGER(20)         NOT NULL
  , CONSTRAINT "PK_producto" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_producto";

CREATE OR REPLACE TRIGGER "TG_producto_BI"
    BEFORE INSERT ON "producto"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_producto".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            usuario
-------------------------------------------------------------------------------

CREATE TABLE "usuario" (
    "id"                              INTEGER
  , "nombre"                          VARCHAR(50)         NOT NULL
  , "mail"                            VARCHAR(70)         NOT NULL
  , "usuario"                         VARCHAR(70)         NOT NULL
  , "clave"                           VARCHAR(60)         NOT NULL
  , "img"                             VARCHAR(70)         NOT NULL
  , CONSTRAINT "PK_usuario" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_usuario";

CREATE OR REPLACE TRIGGER "TG_usuario_BI"
    BEFORE INSERT ON "usuario"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_usuario".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            compra_producto
-------------------------------------------------------------------------------

CREATE TABLE "compra_producto" (
    "id"                              INTEGER
  , "producto_fk"                     INTEGER(20)         NOT NULL
  , "usuario_fk"                      INTEGER(20)         NOT NULL
  , "fecha_compra"                    DATE(20)            NOT NULL
  , CONSTRAINT "PK_compra_producto" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_compra_producto";

CREATE OR REPLACE TRIGGER "TG_compra_producto_BI"
    BEFORE INSERT ON "compra_producto"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_compra_producto".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            venta_producto
-------------------------------------------------------------------------------

CREATE TABLE "venta_producto" (
    "id"                              INTEGER
  , "producto_fk"                     INTEGER(20)         NOT NULL
  , "usuario_fk"                      INTEGER(20)         NOT NULL
  , "fecha_venta"                     DATE(20)            DEFAULT 'NULL'            NOT NULL
  , CONSTRAINT "PK_venta_producto" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_venta_producto";

CREATE OR REPLACE TRIGGER "TG_venta_producto_BI"
    BEFORE INSERT ON "venta_producto"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_venta_producto".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------
--            categoria
-------------------------------------------------------------------------------

CREATE TABLE "categoria" (
    "id"                              INTEGER
  , "nombre"                          VARCHAR(50)         NOT NULL
  , CONSTRAINT "PK_categoria" PRIMARY KEY ( "id" )
);


CREATE SEQUENCE "SQ_categoria";

CREATE OR REPLACE TRIGGER "TG_categoria_BI"
    BEFORE INSERT ON "categoria"
    FOR EACH ROW
BEGIN
    if :NEW."id" is NULL then
        :NEW."id" := "SQ_categoria".nextVal;
    end if;
END;
/

SHOW ERRORS;

-------------------------------------------------------------------------------

ALTER TABLE "producto" ADD CONSTRAINT "FK_producto_categoria" FOREIGN KEY ( "categoria_fk" ) REFERENCES "categoria" ( "id" );
ALTER TABLE "compra_producto" ADD CONSTRAINT "FK_mpra_producto_producto" FOREIGN KEY ( "producto_fk" ) REFERENCES "producto" ( "id" );
ALTER TABLE "compra_producto" ADD CONSTRAINT "FK_mpra_producto_usuario" FOREIGN KEY ( "usuario_fk" ) REFERENCES "usuario" ( "id" );
ALTER TABLE "venta_producto" ADD CONSTRAINT "FK_enta_producto_producto" FOREIGN KEY ( "producto_fk" ) REFERENCES "producto" ( "id" );
ALTER TABLE "venta_producto" ADD CONSTRAINT "FK_enta_producto_usuario" FOREIGN KEY ( "usuario_fk" ) REFERENCES "usuario" ( "id" );