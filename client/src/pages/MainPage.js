import React from 'react'
import {NavLink} from 'react-router-dom'

export const MainPage = () => {

    return (
        <div id="main">
            
            <div className="div-1 div-padding-32 div-black">

                <div className="div-context" style={{maxWidth:1400}}>

                    <div className="div-col l6 div-center div1">
                        <h1 className="h1-size">HTML</h1>
                        <p className="p-size">The HyperText Markup Language, 
                        or HTML is the standard markup language for documents designed to be displayed in a web browser. 
                        It can be assisted by technologies such as Cascading Style Sheets (CSS) and 
                        scripting languages such as JavaScript.</p>
                
                        <p className="p-size">It elements are the building blocks of HTML pages.
                        HTML provides a means to create structured documents by denoting structural semantics for text such as 
                        headings, paragraphs, lists, links, quotes and other items.
                        HTML elements are delineated by tags, written using angle brackets.
                        </p>
                    </div>

                    <div className="div-col l6 div1">
                        <div className="grey-color div-card-2 div-round" style={{padding:16}}>
                            <h5><b>HTML Example:</b></h5>
                                <div className="div-html-code green-border">

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        !DOCTYPE
                                        <span className="attributecolor"> html</span>
                                        <span className="tagcolor">&gt;</span>

                                    </span>

                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        html
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        title
                                        <span className="tagcolor">&gt;</span>
                                    </span>
                                        HTML Tutorial
                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        /title
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        body
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                    <br></br>
                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        h1
                                        <span className="tagcolor">&gt;</span>
                                    </span>
                                    This is a heading
                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        /h1
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        p
                                        <span className="tagcolor">&gt;</span>
                                    </span>
                                    This is a paragraph.
                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        /p
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                    <br></br>
                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        /body
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                    <br></br>

                                    <span className="tagnamecolor">
                                        <span className="tagcolor">&lt;</span>
                                        /html
                                        <span className="tagcolor">&gt;</span>
                                    </span>

                                </div>
                                <NavLink to="/exercise/html" className="NavLink-button MoveToEx">Try it yourself</NavLink>
                        </div>
                    </div>

                </div>
            </div>


            <div className="div-1 div-padding-32 div-light-green">

                <div className="div-context" style={{maxWidth:1400}}>

                    <div className="div-col l6 div-center div1">
                        <h1 className="h1-size">SQL</h1>
                        <p className="p-size">SQL stands for Structured Query Language. 
                        A query language is a kind of programming language that's designed to 
                        facilitate retrieving specific information from databases, 
                        and that's exactly what SQL does. To put it simply, SQL is the language of databases.</p>  

                        <p className="p-size">SQL offers two main advantages over older read–write APIs such as ISAM or VSAM. 
                        Firstly, it introduced the concept of accessing many records with one single command. Secondly, 
                        it eliminates the need to specify how to reach a record, e.g. with or without an index.</p>   
                    </div>

                    <div className="div-col l6 div1">
                        <div className="grey-color div-card-2 div-round" style={{padding:16}}>
                            <h5>SQL Example:</h5>
                                <div className="div-sql-code green-border">

                                    <span className="sqlcolor">

                                        <span className="sqlwordcolor">Select </span>
                                        *
                                        <span className="sqlwordcolor"> FROM </span>
                                        Books

                                        <br></br>

                                        <span className="sqlwordcolor"> WHERE </span>
                                        Pages &gt; 
                                        <span> 500;</span>

                                    </span>
                                </div>
                                <NavLink to="/exercise/sql" className="NavLink-button MoveToEx">Try it yourself</NavLink>
                        </div>
                    </div>

                </div>
            </div>

            <div className="div-1 div-padding-32 div-light-yellow">

                <div className="div-context" style={{maxWidth:1400}}>

                    <div className="div-col l6 div-center div1">
                        <h1 className="h1-size">JavaScript</h1>
                        <p className="p-size">JavaScript was initially created to “make web pages alive”.
                        The programs in this language are called scripts. 
                        They can be written right in a web page’s HTML and run automatically as the page loads.
                        Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.</p>  

                        <p className="p-size">Today, JavaScript can execute not only in the browser, but also on the server, 
                        or actually on any device that has a special program called the JavaScript engine.</p>   
                    </div>

                    <div className="div-col l6 div1">
                        <div className="grey-color div-card-2 div-round" style={{padding:16}}>
                            <h5>JavaScript Example:</h5>
                                <div className="div-js-code green-border">

                                    <span className="jscolor">

                                        <span className="jswordcolor">const </span>
                                        num1 = 
                                        <span className="jsnumcolor"> 5</span>
                                        ;

                                        <br></br>

                                        <span className="jswordcolor">const </span>
                                        num2 = 
                                        <span className="jsnumcolor"> 3</span>
                                        ;

                                        <br></br>
                                        <br></br>

                                        <span className="jswordcolor">const </span>
                                        sum = num1 + num2;

                                        <br></br>
                                        <br></br>

                                        <span className="jsnumcolor">console</span>
                                        .log(
                                        <span className="jstextcolor">'The sum of' </span>
                                        + num1 +
                                        <span className="jstextcolor"> 'and' </span>
                                        + num2 +
                                        <span className="jstextcolor"> 'is: '</span>
                                        + sum);

                                    </span>
                                </div>
                                <NavLink to="/exercise/js" className="NavLink-button MoveToEx">Try it yourself</NavLink>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}