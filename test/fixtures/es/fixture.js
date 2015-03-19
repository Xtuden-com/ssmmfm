/* global define */

define(['mocha'], function() {
  'use strict';

  mocha.setup("bdd");

    beforeEach(function() {

      this.fixtures = {

        Cluster: {

          valid: {
                "took": 65,
                "timed_out": false,
                "_shards": {
                    "total": 5,
                    "successful": 5,
                    "failed": 0
                },
                "hits": {
                    "total": 724,
                    "max_score": 0,
                    "hits": []
                },
                "aggregations": {
                    "dish": {
                        "doc_count_error_upper_bound": 0,
                        "sum_other_doc_count": 0,
                        "buckets": [
                            {
                                "key": "691.0",
                                "doc_count": 622,
                                "top_names": {
                                    "hits": {
                                        "total": 622,
                                        "max_score": null,
                                        "hits": [
                                            {
                                                "_index": "menus",
                                                "_type": "item",
                                                "_id": "7227",
                                                "_score": null,
                                                "_source": {
                                                    "dish_menus_appeared": 613,
                                                    "menu_page_uri": "http://menus.nypl.org/menu_pages/304",
                                                    "dish_name": "Lamb Chops"
                                                },
                                                "sort": [
                                                    613
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "key": "373520.0",
                                "doc_count": 72,
                                "top_names": {
                                    "hits": {
                                        "total": 72,
                                        "max_score": null,
                                        "hits": [
                                            {
                                                "_index": "menus",
                                                "_type": "item",
                                                "_id": "1305412",
                                                "_score": null,
                                                "_source": {
                                                    "dish_menus_appeared": 72,
                                                    "menu_page_uri": "http://menus.nypl.org/menu_pages/44272",
                                                    "dish_name": "Lamb chops"
                                                },
                                                "sort": [
                                                    72
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "key": "424809.0",
                                "doc_count": 8,
                                "top_names": {
                                    "hits": {
                                        "total": 8,
                                        "max_score": null,
                                        "hits": [
                                            {
                                                "_index": "menus",
                                                "_type": "item",
                                                "_id": "1325004",
                                                "_score": null,
                                                "_source": {
                                                    "dish_menus_appeared": 6,
                                                    "menu_page_uri": "http://menus.nypl.org/menu_pages/39712",
                                                    "dish_name": "LAMB CHOPS"
                                                },
                                                "sort": [
                                                    6
                                                ]
                                            }
                                        ]
                                    }
                                }
                            },
                        ]
                    }
                }
            }
          
        },

        Dishes: {
            valid: {
                    "took": 4,
                    "timed_out": false,
                    "_shards": {
                        "total": 5,
                        "successful": 5,
                        "failed": 0
                    },
                    "hits": {
                        "total": 115,
                        "max_score": 0,
                        "hits": []
                    },
                    "aggregations": {
                        "dishes": {
                            "doc_count_error_upper_bound": 0,
                            "sum_other_doc_count": 0,
                            "buckets": [
                                {
                                    "key": "78.0",
                                    "doc_count": 112
                                },
                                {
                                    "key": "414710.0",
                                    "doc_count": 1
                                },
                                {
                                    "key": "418795.0",
                                    "doc_count": 1
                                },
                                {
                                    "key": "452745.0",
                                    "doc_count": 1
                                }
                            ]
                        }
                    }
                }
            }

      };

    });

});