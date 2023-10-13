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

// Compare it while login in
export const comparePassword = (password, hash) =>{
    return bcrypt.compare(password, hash)
}