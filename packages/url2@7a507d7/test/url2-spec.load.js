montageDefine("7a507d7","test/url2-spec",{dependencies:["../url2"],factory:function(e){var t=e("../url2"),n=[{source:"",target:"",relative:""},{source:"foo/bar/",target:"foo/bar/",relative:""},{source:"foo/bar/baz",target:"foo/bar/",relative:"./"},{source:"foo/bar/",target:"/foo/bar/",relative:"/foo/bar/"},{source:"/foo/bar/baz",target:"/foo/bar/quux",relative:"quux"},{source:"/foo/bar/baz",target:"/foo/bar/quux/asdf",relative:"quux/asdf"},{source:"/foo/bar/baz",target:"/foo/bar/quux/baz",relative:"quux/baz"},{source:"/foo/bar/baz",target:"/foo/quux/baz",relative:"../quux/baz"},{source:"/foo/bar/baz",target:"/foo/quux/baz?a=10",relative:"../quux/baz?a=10"},{source:"/foo/bar/baz?a=10",target:"/foo/quux/baz?a=10",relative:"../quux/baz?a=10"},{source:"/foo/bar/baz?b=20",target:"/foo/quux/baz?a=10",relative:"../quux/baz?a=10"},{source:"http://example.com",target:"/foo/bar",relative:"/foo/bar"},{source:"",target:"http://example.com/foo/bar",relative:"http://example.com/foo/bar"},{source:"",target:"#foo",relative:"#foo"},{source:"",target:"?a=10",relative:"?a=10"},{source:"?a=10",target:"#foo",relative:"?a=10#foo"}];describe("relative",function(){n.forEach(function(e){it(e.label||"from "+JSON.stringify(e.source)+" "+"to "+JSON.stringify(e.target),function(){expect(t.relative(e.source,e.target)).toBe(e.relative)})}),it("should format a url with a path property",function(){expect(t.format({path:"a/b"})).toEqual("a/b"),expect(t.format({path:"a/b?c=d"})).toEqual("a/b?c=d")})})}});