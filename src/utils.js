export const generateSlug = (title) => {
  return title
    .toLowerCase()                // convert to lowercase
    .trim()                        // remove spaces at the start/end
    .replace(/[^\w\s-]/g, "")      // remove special characters
    .replace(/\s+/g, "-");         // replace spaces with hyphens
};