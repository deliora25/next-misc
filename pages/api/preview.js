export default function handler(req, res) {
  res.setPreviewData({ user: "Gabriel" });
  res.redirect(req.query.redirect);
}
