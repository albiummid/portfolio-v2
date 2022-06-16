const allProjects = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All projects',
  })
}

export { allProjects }
