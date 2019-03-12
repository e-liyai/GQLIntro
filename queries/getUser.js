module.exports = async (db, userId) => {
  try {
    return await db.Users.findById(userId)
  } catch (err) {
    console.log(err)
  }
}