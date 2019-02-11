module.exports = async (db, userId) => {
  try {
    const result = await db.Users.findById(userId)
    return result
  } catch (err) {
    console.log(err)
  }
}