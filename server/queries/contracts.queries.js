const queries = {
    getContracts: `
        SELECT *
        FROM contratos
        WHERE
            (? IS NULL OR Id = ?)
            OR (? IS NULL OR origen = ?)
            OR (? IS NULL OR estado = ?)
            OR (? IS NULL OR cupon = ?)
        LIMIT 50
    `,
};

module.exports = queries;