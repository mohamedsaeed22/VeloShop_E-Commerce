import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sale",
  title: "sale",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "sale title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "sale description",
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "discount Amount",
      description: "amount off in percentage or fixed value",
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "coupon Code",
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "valid from",
    }),
    defineField({
      name: "validUntil",
      type: "datetime",
      title: "valid until",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "is Active",
      description: "toggle to active/deactive the sale",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection;
      const status = isActive ? "Active" : "Inactive";
      return {
        title,
        subtitle: `${discountAmount}% off - code: ${couponCode} - ${status}`,
      };
    },
  },
});
