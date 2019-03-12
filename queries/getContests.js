module.exports = async (db, user) => {
  try {
    const contests = await db.Contests.findAll({
    	where: {
    		updatedBy: user.id
    	},
    	raw: true
    })
    return contests
  } catch (err) {
    console.log(err)
  }
}