'use client'

import { motion } from 'framer-motion'

const SVGAnimation = () => {
    return (
        <>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 512 512"
            >
                <motion.path
                    d="M0,120v272h512V120H0z M32,313.813V198.156c22.969-3.875,40.844-22.703,43.188-46.156h132.938 c-30.016,20.375-50.313,59.25-50.313,104c0,44.734,20.281,83.625,50.297,104H75.188C72.844,336.547,54.969,317.688,32,313.813z M306.422,279.219c0,4.656-0.953,8.953-2.859,12.891s-4.688,7.344-8.313,10.203c-3.641,2.844-6.75,5.094-12.094,6.703 c-4.188,1.281-9.469,2.047-14.406,2.313v14.891h-13.313v-14.781h-12.063v14.781h-13.313v-14.781H219.5h-13.656v-13.5 c0-2.609-0.188-4.188,2.531-4.75c0.25-0.031,0.594-0.094,1.031-0.156c0.438-0.078,5.75-0.406,6.969-0.406 c2.125,0,3.125-2.031,3.125-4.063v-65.641c0-2.469-1.313-3.422-3.125-3.688c-1.188-0.172-6.531-0.344-6.969-0.422 c-0.438-0.063-0.797-0.125-1.031-0.156c-2.719-0.531-2.531-2.125-2.531-4.75v-12.094H219.5h10.563v-15.125h13.313v15.172 l12.063,0.016v-15.188h13.313v15.422c7.188,0.594,16.063,2.859,22.156,7.578c3.438,2.656,6.094,5.594,7.719,9.188 c1.641,3.594,2.438,7.625,2.438,12.125c0,2.578-0.406,5.047-1.219,7.406c-0.813,2.344-2.063,4.531-3.781,6.594 c-1.719,2.047-7.438,7.813-12.563,9.813C299.125,257.516,306.422,266.344,306.422,279.219z M354.188,256 c0-44.75-20.281-83.625-50.313-104h132.906c2.344,23.453,20.25,42.281,43.219,46.156v115.656 c-22.969,3.891-40.875,22.734-43.219,46.188H303.891C333.906,339.625,354.188,300.734,354.188,256z"
                    stroke="black"
                    strokeWidth="5"
                    fill="green"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, type: "tween" }}
                />
                <motion.path
                    d="M271.25,270.25c-1.344-1.016-3.063-1.813-5.156-2.359c-2.094-0.531-4.625-0.813-7.594-0.813h-13.906v24.734 h13.969c3.125,0,5.781-0.344,7.875-1.031c2.125-0.719,3.813-1.656,5.078-2.813c1.266-1.172,2.203-2.531,2.766-4.094 c0.563-1.547,0.844-3.203,0.844-4.953c0-1.828-0.313-3.469-0.938-4.938C273.563,272.531,272.594,271.281,271.25,270.25z"
                    stroke="black"
                    strokeWidth="5"
                    fill="green"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, type: "tween" }}
                />
                <circle cx="125.125" cy="256" r="13.75"></circle>
                <circle cx="386.875" cy="256" r="13.75"></circle>
                <motion.path
                    d="M267,242.719c2.984-1.969,4.469-5.047,4.469-9.281c0-4.406-1.344-7.531-4-9.406 c-2.688-1.875-6.875-2.797-12.563-2.797h-10.813v24.391h9.875C259.688,245.625,264.047,244.656,267,242.719z"
                    stroke="black"
                    strokeWidth="5"
                    fill="green"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, type: "tween" }}
                />
            </motion.svg>
        </>
    )
}

export default SVGAnimation

// bitcoin banknote from https://www.svgrepo.com/svg/483288/bitcoin-banknote

// <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#000000;}  </style> <g> <path class="st0" d="M0,120v272h512V120H0z M32,313.813V198.156c22.969-3.875,40.844-22.703,43.188-46.156h132.938 c-30.016,20.375-50.313,59.25-50.313,104c0,44.734,20.281,83.625,50.297,104H75.188C72.844,336.547,54.969,317.688,32,313.813z M306.422,279.219c0,4.656-0.953,8.953-2.859,12.891s-4.688,7.344-8.313,10.203c-3.641,2.844-6.75,5.094-12.094,6.703 c-4.188,1.281-9.469,2.047-14.406,2.313v14.891h-13.313v-14.781h-12.063v14.781h-13.313v-14.781H219.5h-13.656v-13.5 c0-2.609-0.188-4.188,2.531-4.75c0.25-0.031,0.594-0.094,1.031-0.156c0.438-0.078,5.75-0.406,6.969-0.406 c2.125,0,3.125-2.031,3.125-4.063v-65.641c0-2.469-1.313-3.422-3.125-3.688c-1.188-0.172-6.531-0.344-6.969-0.422 c-0.438-0.063-0.797-0.125-1.031-0.156c-2.719-0.531-2.531-2.125-2.531-4.75v-12.094H219.5h10.563v-15.125h13.313v15.172 l12.063,0.016v-15.188h13.313v15.422c7.188,0.594,16.063,2.859,22.156,7.578c3.438,2.656,6.094,5.594,7.719,9.188 c1.641,3.594,2.438,7.625,2.438,12.125c0,2.578-0.406,5.047-1.219,7.406c-0.813,2.344-2.063,4.531-3.781,6.594 c-1.719,2.047-7.438,7.813-12.563,9.813C299.125,257.516,306.422,266.344,306.422,279.219z M354.188,256 c0-44.75-20.281-83.625-50.313-104h132.906c2.344,23.453,20.25,42.281,43.219,46.156v115.656 c-22.969,3.891-40.875,22.734-43.219,46.188H303.891C333.906,339.625,354.188,300.734,354.188,256z"></path> <circle class="st0" cx="125.125" cy="256" r="13.75"></circle> <circle class="st0" cx="386.875" cy="256" r="13.75"></circle> <path class="st0" d="M271.25,270.25c-1.344-1.016-3.063-1.813-5.156-2.359c-2.094-0.531-4.625-0.813-7.594-0.813h-13.906v24.734 h13.969c3.125,0,5.781-0.344,7.875-1.031c2.125-0.719,3.813-1.656,5.078-2.813c1.266-1.172,2.203-2.531,2.766-4.094 c0.563-1.547,0.844-3.203,0.844-4.953c0-1.828-0.313-3.469-0.938-4.938C273.563,272.531,272.594,271.281,271.25,270.25z"></path> <path class="st0" d="M267,242.719c2.984-1.969,4.469-5.047,4.469-9.281c0-4.406-1.344-7.531-4-9.406 c-2.688-1.875-6.875-2.797-12.563-2.797h-10.813v24.391h9.875C259.688,245.625,264.047,244.656,267,242.719z"></path> </g> </g></svg>
