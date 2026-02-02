import slugify from "slugify";

export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.link && !data.slug) {
      data.slug = slugify(data.link, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.link) {
      data.slug = slugify(data.link, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },
};
