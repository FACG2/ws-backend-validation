
export const get = (req, res) => {
  res.json({
    username: 'mantagen',
    role: 'ADMIN'
  })
}

export const post = (req, res) => {
  const { body } = req;
  const randomId = Math.floor(Math.random() * 1000);

  res.json({
    id: randomId,
    username: body.username,
    email: body.email
  })
}
