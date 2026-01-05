
// creating element by React.createElement(type,props,children)
        const head=React.createElement("h1",{},"Hello world from React js");
        const head1=React.createElement("h2",{},"hellow world from React js")
         // creating root for container div 
        const containerroot=ReactDOM.createRoot(document.getElementById("container"));
         // creating a div with two h1 tags as children
        const div1=React.createElement("div",{
            id:"container1",
        },
            [head,head1]
        );
    //    rendering div1 to containerroot
        containerroot.render(div1);
        
        //  where to render finding root by ReactDOM.createRoot()
        const root=ReactDOM.createRoot(document.getElementById("root"));
        
        //  creating a div with nested h1,h2,h3 tags and renderinng divv to root
        const divv=React.createElement("div",{
            id:"container",
        },
            React.createElement("h1",{},"H1 tag ",
                React.createElement("h2",{},"H2 tag ",
                    React.createElement("h3",{},"H3 tag ")
                )
            )
        );
        root.render(divv);
       

