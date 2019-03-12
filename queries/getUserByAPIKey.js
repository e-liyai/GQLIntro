module.exports = async (db, key) => {
  try {
    return await db.Users.findOne({
    	where: {
    		apiKey: key
    	}
    })
  } catch (err) {
    console.log(err)
  }
}