{
    "namespace": "wp\/v2",
    "routes": {
        "\/wp\/v2": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wp\/v2"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2"
            }
        },
        "\/wp\/v2\/posts": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sticky": {
                        "required": false,
                        "description": "Limit result set to items that are sticky.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "The format for the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Whether or not the object should be treated as sticky.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/posts"
            }
        },
        "\/wp\/v2\/posts\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "The format for the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Whether or not the object should be treated as sticky.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P[\\d]+)\/revisions\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as revisions do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Limit result set to posts with a specific menu_order value.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title", "menu_order"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to items with particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "The order of the object in relation to other object of its type.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/pages"
            }
        },
        "\/wp\/v2\/pages\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "The order of the object in relation to other object of its type.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P[\\d]+)\/revisions\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as revisions do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/media": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to items with particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "inherit",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["inherit", "private", "trash"],
                            "type": "string"
                        }
                    },
                    "media_type": {
                        "required": false,
                        "enum": ["image", "video", "text", "application", "audio"],
                        "description": "Limit result set to attachments of a particular media type.",
                        "type": "string"
                    },
                    "mime_type": {
                        "required": false,
                        "description": "Limit result set to attachments of a particular MIME type.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Alternative text to display when attachment is not displayed.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "The attachment caption.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "The attachment description.",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "The ID for the associated post of the attachment.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/media"
            }
        },
        "\/wp\/v2\/media\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Alternative text to display when attachment is not displayed.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "The attachment caption.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "The attachment description.",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "The ID for the associated post of the attachment.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/events": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to items with particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/events"
            }
        },
        "\/wp\/v2\/events\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/movie": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to items with particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/movie"
            }
        },
        "\/wp\/v2\/movie\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "enum": [""],
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/types": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/types"
            }
        },
        "\/wp\/v2\/types\/(?P[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "type": {
                        "required": false,
                        "description": "An alphanumeric identifier for the post type.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/statuses": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/statuses"
            }
        },
        "\/wp\/v2\/statuses\/(?P[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "status": {
                        "required": false,
                        "description": "An alphanumeric identifier for the status.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/taxonomies": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "description": "Limit results to taxonomies associated with a specific post type.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/taxonomies"
            }
        },
        "\/wp\/v2\/taxonomies\/(?P[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "taxonomy": {
                        "required": false,
                        "description": "An alphanumeric identifier for the taxonomy.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/categories": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by term attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide terms not assigned to any posts.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limit result set to terms assigned to a specific parent.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "Limit result set to terms assigned to a specific post.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to terms with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The parent term ID.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/categories"
            }
        },
        "\/wp\/v2\/categories\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The parent term ID.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as terms do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/tags": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by term attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide terms not assigned to any posts.",
                        "type": "boolean"
                    },
                    "post": {
                        "required": false,
                        "description": "Limit result set to terms assigned to a specific post.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to terms with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/tags"
            }
        },
        "\/wp\/v2\/tags\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as terms do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/users": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date", "slug", "email", "url"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to users with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "roles": {
                        "required": false,
                        "description": "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "username": {
                        "required": true,
                        "description": "Login name for the user.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Display name for the user.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "First name for the user.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Last name for the user.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "The email address for the user.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL of the user.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Description of the user.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US"],
                        "description": "Locale for the user.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "The nickname for the user.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the user.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Roles assigned to the user.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": true,
                        "description": "Password for the user (never included).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/users"
            }
        },
        "\/wp\/v2\/users\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the user.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the user.",
                        "type": "integer"
                    },
                    "username": {
                        "required": false,
                        "description": "Login name for the user.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Display name for the user.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "First name for the user.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Last name for the user.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "The email address for the user.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL of the user.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Description of the user.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US"],
                        "description": "Locale for the user.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "The nickname for the user.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the user.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Roles assigned to the user.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Password for the user (never included).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the user.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as users do not support trashing.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reassign the deleted user's posts and links to this user ID.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wp\/v2\/users\/me": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "username": {
                        "required": false,
                        "description": "Login name for the user.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Display name for the user.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "First name for the user.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Last name for the user.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "The email address for the user.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL of the user.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Description of the user.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US"],
                        "description": "Locale for the user.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "The nickname for the user.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the user.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Roles assigned to the user.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Password for the user (never included).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as users do not support trashing.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reassign the deleted user's posts and links to this user ID.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/users\/me"
            }
        },
        "\/wp\/v2\/comments": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to comments published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "description": "Limit result set to comments assigned to specific user IDs. Requires authorization.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "description": "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_email": {
                        "required": false,
                        "description": "Limit result set to that from a specific author email. Requires authorization.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to comments published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date_gmt",
                        "enum": ["date", "date_gmt", "id", "include", "post", "parent", "type"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to comments of specific parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "post": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to comments assigned to specific post IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "approve",
                        "description": "Limit result set to comments assigned a specific status. Requires authorization.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "comment",
                        "description": "Limit result set to comments assigned a specific type. Requires authorization.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "author": {
                        "required": false,
                        "description": "The ID of the user object, if author was a user.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Email address for the object author.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "IP address for the object author.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Display name for the object author.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL for the object author.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent for the object author.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": 0,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "default": 0,
                        "description": "The ID of the associated post object.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "State of the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/comments"
            }
        },
        "\/wp\/v2\/comments\/(?P[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the parent post of the comment (if the post is password protected).",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID of the user object, if author was a user.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Email address for the object author.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "IP address for the object author.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Display name for the object author.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL for the object author.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent for the object author.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "The ID of the associated post object.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "State of the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "acf": {
                        "required": false,
                        "description": "Expose advanced custom fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the parent post of the comment (if the post is password protected).",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/settings": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "title": {
                        "required": false,
                        "description": "Site title.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Site tagline.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Site URL.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "This address is used for admin purposes, like new user notification.",
                        "type": "string"
                    },
                    "timezone": {
                        "required": false,
                        "description": "A city in the same timezone as you.",
                        "type": "string"
                    },
                    "date_format": {
                        "required": false,
                        "description": "A date format for all date strings.",
                        "type": "string"
                    },
                    "time_format": {
                        "required": false,
                        "description": "A time format for all time strings.",
                        "type": "string"
                    },
                    "start_of_week": {
                        "required": false,
                        "description": "A day number of the week that the week should start on.",
                        "type": "integer"
                    },
                    "language": {
                        "required": false,
                        "description": "WordPress locale code.",
                        "type": "string"
                    },
                    "use_smilies": {
                        "required": false,
                        "description": "Convert emoticons like :-) and :-P to graphics on display.",
                        "type": "boolean"
                    },
                    "default_category": {
                        "required": false,
                        "description": "Default post category.",
                        "type": "integer"
                    },
                    "default_post_format": {
                        "required": false,
                        "description": "Default post format.",
                        "type": "string"
                    },
                    "posts_per_page": {
                        "required": false,
                        "description": "Blog pages show at most.",
                        "type": "integer"
                    },
                    "default_ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
                        "type": "string"
                    },
                    "default_comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Allow people to post comments on new articles.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/wp\/v2\/settings"
            }
        }
    },
    "_links": {
        "up": [{
            "href": "http:\/\/www.francescosilver.com\/wordpress\/wp-json\/"
        }]
    }
}
