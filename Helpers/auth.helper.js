import bcrypt from "bcrypt";

// Hash password while signup
export const hashPassword = async (password) => {
  try {
    const saltRounds = 5
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
  } catch (error) {
    console.lof(error)
  }
};


export const comparePassword = (password, hash) =>{
    return bcrypt.compare(password, hash)
}