export const formatCandidates = (candidates) => (
  candidates.reduce((prev, curr) => ({
    ...prev,
    [curr.uid]: curr,
  }), {})
)
