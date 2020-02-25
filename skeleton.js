/*
* Copyright 2019 Google Inc.
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*     http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/* jshint esversion: 8 */
module.exports = function(RED) {
    "use strict";
    const NODE_TYPE = "skeleton";


    function SkeletonNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.log("I was started!");

        function Input(msg) {
            node.log("Input called!");
        }

        node.on("input", Input);
    }

    RED.nodes.registerType(NODE_TYPE, SkeletonNode);
};