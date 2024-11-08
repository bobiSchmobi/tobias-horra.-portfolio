import { defineField, defineType } from "sanity";
import { muxInput } from "sanity-plugin-mux-input";

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [{
        name: "title",
        title: "Title",
        type: "string",
    },

    {
        name: "slug",
        title:"slug",
        type: "slug",
        options: {source:"title"},
    },
    {
        name: "ytvid",
        title: "Youtube",
        type:"url"
    },
    {
        name: "image",
        title:"Image",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "year",
        title: "Year",
        type: "string",
    },
    {
        name: "month",
        title: "Month",
        type: "string",
    },
    {
        name: "info1",
        title: "Info1",
        type: "string",
    },
    {
        name: "info2",
        title: "Info2",
        type: "string",
    },
    {
        name: "info3",
        title: "Info3",
        type: "string",
    },
    {
        name: "bg",
        title: "Bg",
        type: "string",
    },
    {
        name: "url",
        title: "URL",
        type: "url",
    },
    {
        name: "content",
        title: "Content",
        type: "array",
        of:[{type: "block"}]
    },

    {
        name: "imgh1",
        title:"Lookbook hotizontal 1",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "imgv1",
        title:"Lookbook vertical 1",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "imgv2",
        title:"Lookbook vertical 2",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "imgh2",
        title:"Lookbook horizontal 2",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "imgv3",
        title:"Lookbook vertical 3",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "imgh3",
        title:"Lookbook horizontal 3",
        type: "image",
        options: {hotspot: true},
    },
    {
        name: "imgh4",
        title:"Lookbook horizontal 4",
        type: "image",
        options: {hotspot: true},
    },


]
})