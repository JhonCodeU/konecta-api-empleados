export const success = (request: any, response: any, message: any, status: number, code: any) => {
  response.status(status || 200).send({
    codigo_error: code || "0",
    ...message,
    estado: status || 200,
  });
};

export const error = (request: any, response: any, message: any, status: number, details: string, code: any) => {
  response.status(status || 500).send({
    codigo_error: code || "1",
    mensaje: message,
    ...(details && { details }),
    estado: status || 500,
  });
};