const cds = require('@sap/cds') 
module.exports = async(srv) => {
    // Add some discount for overstocked books
    srv.after ('READ','Books', eachBook => { if (eachBook.stock > 100) {
    eachBook.title += ` -- 11% discount!` }
    })
    // Reduce stock of ordered books if available stock suffices
    srv.on('submitOrder', async(req) => {
    const db = await cds.connect.to('db') // connect to database service const { Books } = db.entities // get reflected definitions const {book,quantity} = req.data;
    const n = await UPDATE (Books, book) .with ({ stock: {'-=': quantity }}) .where ({ stock: {'>=': quantity }})
          if(n > 0){
             return;
    }else {
    req.error(409,`${quantity} exceeds stock for book #${book}`)
    } })
    }