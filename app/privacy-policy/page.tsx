import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://quazarrsecurity.com/privacy-policy" },
  title: "Privacy Policy",
  description:
    "QuaZarR Security privacy policy — how we collect, use, and protect your personal information in accordance with UK GDPR.",
  openGraph: {
    url: "https://quazarrsecurity.com/privacy-policy",
    title: "Privacy Policy | QuaZarR Security",
    description: "How QuaZarR Security collects, uses, and protects your personal information.",
  },
};

const termlyHTML = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * {
    background: transparent !important;
  }
  [data-custom-class='title'], [data-custom-class='title'] * {
    font-family: Arial !important;
    font-size: 26px !important;
    color: #000000 !important;
  }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
    font-family: Arial !important;
    color: #595959 !important;
    font-size: 14px !important;
  }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
    font-family: Arial !important;
    font-size: 19px !important;
    color: #000000 !important;
  }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
    font-family: Arial !important;
    font-size: 17px !important;
    color: #000000 !important;
  }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
    color: #595959 !important;
    font-size: 14px !important;
    font-family: Arial !important;
  }
  [data-custom-class='link'], [data-custom-class='link'] * {
    color: #3030F1 !important;
    font-size: 14px !important;
    font-family: Arial !important;
    word-break: break-word !important;
  }
  .termly-wrap ul { list-style-type: square; }
  .termly-wrap ul > li > ul { list-style-type: circle; }
  .termly-wrap ul > li > ul > li > ul { list-style-type: square; }
  .termly-wrap ol li { font-family: Arial; }
</style>

<span style="display:block;margin:0 auto 3.125rem;width:11.125rem;height:2.375rem;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOCAtMi42NzIuOHptMS40OC02LjY4OGMtLjQtLjM1Mi0uODgzLS41MjgtMS40NDgtLjUyOHMtMS4wMzcuMTc2LTEuNDE2LjUyOGMtLjM3OS4zNTItLjYwNS44MjEtLjY4IDEuNDA4aDQuMTkyYy0uMDMyLS41ODctLjI0OC0xLjA1Ni0uNjQ4LTEuNDA4em03LjAxNi0yLjMwNHYxLjU2OGMuNTk3LTEuMTMgMS40NjEtMS42OTYgMi41OTItMS42OTZ2Mi4zMDRoLS41NmMtLjY3MiAwLTEuMTc5LjE2OC0xLjUyLjUwNC0uMzQxLjMzNi0uNTEyLjkxNS0uNTEyIDEuNzM2VjI0aC0yLjI1NnYtOC44NjRoMi4yNTZ6bTYuNDQ4IDB2MS4zMjhjLjU2NS0uOTcgMS40ODMtMS40NTYgMi43NTItMS40NTYuNjcyIDAgMS4yNzIuMTU1IDEuOC40NjQuNTI4LjMxLjkzNi43NTIgMS4yMjQgMS4zMjguMzEtLjU1NS43MzMtLjk5MiAxLjI3Mi0xLjMxMmEzLjQ4OCAzLjQ4OCAwIDAgMSAxLjgxNi0uNDhjMS4wNTYgMCAxLjkwNy4zMyAyLjU1Mi45OTIuNjQ1LjY2MS45NjggMS41OS45NjggMi43ODRWMjRoLTIuMjR2LTQuODk2YzAtLjY5My0uMTc2LTEuMjI0LS41MjgtMS41OTItLjM1Mi0uMzY4LS44MzItLjU1Mi0xLjQ0LS41NTJzLTEuMDkuMTg0LTEuNDQ4LjU1MmMtLjM1Ny4zNjgtLjUzNi44OTktLjUzNiAxLjU5MlYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI1NnYtOC44NjRoMi4yNTZ6TTE2NC45MzYgMjRWMTIuMTZoMi4yNTZWMjRoLTIuMjU2em03LjA0LS4xNmwtMy40NzItOC43MDRoMi41MjhsMi4yNTYgNi4zMDQgMi4zODQtNi4zMDRoMi4zNTJsLTUuNTM2IDEzLjA1NmgtMi4zNTJsMS44NC00LjM1MnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==) center no-repeat;"></span>

<div class="termly-wrap" data-custom-class="body">
<div><strong><span style="font-size:26px;"><span data-custom-class="title"><h1>QUAZARR SECURITY PRIVACY POLICY</h1></span></span></strong></div>
<div><span style="color:rgb(127,127,127);"><strong><span style="font-size:15px;"><span data-custom-class="subtitle">Last updated July 26, 2026</span></span></strong></span></div>
<div><br></div><div><br></div><div><br></div>
<div style="line-height:1.5;"><span style="color:rgb(89,89,89);font-size:15px;"><span data-custom-class="body_text">This Privacy Notice for <strong>Rowan Richard Roger Money</strong> (doing business as <strong>QuaZarR Security</strong>) ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal information when you use our services ('<strong>Services</strong>'), including when you:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Visit our website at <a target="_blank" data-custom-class="link" href="https://quazarrsecurity.com">https://quazarrsecurity.com</a> or any website of ours that links to this Privacy Notice</span></span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;">Use AI cybersecurity risk assessments. AI cybersecurity risk assessment and GDPR compliance consultancy services for UK SMBs.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Engage with us in other related ways, including any marketing or events</span></span></li>
</ul>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(127,127,127);"><span data-custom-class="body_text"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:hello@quazarrsecurity.com">hello@quazarrsecurity.com</a>.</span></span></div>
<div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><br></div>

<div style="line-height:1.5;"><strong><span style="font-size:15px;"><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong></span></span><a data-custom-class="link" href="#toc"><span style="color:rgb(0,58,250);font-size:15px;"><strong><em>table of contents</em></strong></span></a><span style="font-size:15px;"><span data-custom-class="body_text"><strong><em> below to find the section you are looking for.</em></strong></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about </span></span><a data-custom-class="link" href="#personalinfo"><span style="color:rgb(0,58,250);font-size:15px;">personal information you disclose to us</span></a><span data-custom-class="body_text">.</span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We collect business contact details of decision-makers at prospective client organisations from publicly available professional sources, such as company websites, LinkedIn and Companies House. We do not buy contact lists and we do not use data brokers.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about </span></span><a data-custom-class="link" href="#infouse"><span style="color:rgb(0,58,250);font-size:15px;">how we process your information</span></a><span data-custom-class="body_text">.</span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about </span></span><a data-custom-class="link" href="#whoshare"><span style="color:rgb(0,58,250);font-size:15px;">when and with whom we share your personal information</span></a><span style="font-size:15px;"><span data-custom-class="body_text">.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about </span></span><a data-custom-class="link" href="#infosafe"><span style="color:rgb(0,58,250);font-size:15px;">how we keep your information safe</span></a><span data-custom-class="body_text">.</span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about </span></span><a data-custom-class="link" href="#privacyrights"><span style="color:rgb(0,58,250);font-size:15px;">your privacy rights</span></a><span data-custom-class="body_text">.</span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a target="_blank" data-custom-class="link" href="https://quazarrsecurity.com/contact">https://quazarrsecurity.com/contact</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span></span><a data-custom-class="link" href="#toc"><span style="color:rgb(0,58,250);font-size:15px;">Review the Privacy Notice in full</span></a><span style="font-size:15px;"><span data-custom-class="body_text">.</span></span></div>
<div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><br></div>

<div id="toc" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#infocollect"><span style="color:rgb(0,58,250);">1. WHAT INFORMATION DO WE COLLECT?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#infouse"><span style="color:rgb(0,58,250);">2. HOW DO WE PROCESS YOUR INFORMATION?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#legalbases"><span style="color:rgb(0,58,250);">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#whoshare"><span style="color:rgb(0,58,250);">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#cookies"><span style="color:rgb(0,58,250);">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#ai"><span style="color:rgb(0,58,250);">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#intltransfers"><span style="color:rgb(0,58,250);">7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#inforetain"><span style="color:rgb(0,58,250);">8. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#infosafe"><span style="color:rgb(0,58,250);">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#infominors"><span style="color:rgb(0,58,250);">10. DO WE COLLECT INFORMATION FROM MINORS?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#privacyrights"><span style="color:rgb(0,58,250);">11. WHAT ARE YOUR PRIVACY RIGHTS?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#DNT"><span style="color:rgb(0,58,250);">12. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#policyupdates"><span style="color:rgb(0,58,250);">13. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#contact"><span style="color:rgb(0,58,250);">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
<div style="line-height:1.5;"><a data-custom-class="link" href="#request"><span style="color:rgb(0,58,250);">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
<div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><br></div>

<div id="infocollect" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong>
<span data-custom-class="heading_2" id="personalinfo"><strong><h3>Personal information you disclose to us</h3></strong></span>
<span style="color:rgb(89,89,89);font-size:15px;"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We collect personal information that you provide to us.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information we collect may include the following:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);">names</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);">phone numbers</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);">email addresses</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);">contact preferences</span></li>
</ul>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>Sensitive Information.</strong> We do not process sensitive information.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></div><div style="line-height:1.5;"><br></div><span data-custom-class="heading_2"><strong><h3>Information we collect from public sources</h3></strong></span><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We collect business contact details of potential clients from publicly available professional sources.</em></span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">If you have received an email or call from us and have had no prior contact with us, your details were obtained from publicly available professional sources rather than from you directly.</span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>What we hold:</strong> your name, job title, employer, business email address, business telephone number, and any publicly stated professional responsibilities relevant to AI or data protection at your organisation.</span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>What we do not hold:</strong> your personal email address, your personal telephone number, or any special category data.</span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>Where it came from:</strong> your organisation's website, LinkedIn, Companies House, and published trade directories. We do not purchase contact lists and we do not use data brokers.</span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>Our lawful basis:</strong> legitimate interests. See section 3 below.</span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>How long we keep it:</strong> twelve months from our last meaningful contact with you, after which it is deleted. If you ask us to stop contacting you, we keep the minimum necessary to recognise you, being your name, employer and the contact detail you objected to, on a permanent suppression list, so that we do not contact you again by mistake.</span></span></div><div style="line-height:1.5;"><br></div><div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>Your right to object:</strong> you can tell us to stop at any time, with no need to give a reason. For direct marketing this right is absolute. Email hello@quazarrsecurity.com and we will action it within one working day.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="infouse" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</span></li>
</ul>
<div style="line-height:1.5;"><br></div>

<div id="legalbases" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2></span></strong>
<em><span style="font-size:15px;"><span data-custom-class="body_text"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</span></span></em></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;"><strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a data-custom-class="link" href="#withdrawconsent"><span style="color:rgb(0,58,250);">withdrawing your consent</span></a>.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;"><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span></li><li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;"><strong>Legitimate Interests.</strong> We may process your information where it is necessary for our legitimate business interests and those interests are not overridden by your rights and freedoms. We rely on this basis to contact decision-makers at prospective client organisations about our services, using business contact details obtained from public professional sources. We have carried out and documented a Legitimate Interests Assessment for this processing, and you may request a copy at any time by emailing hello@quazarrsecurity.com.</span></li>
</ul>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">In legal terms, we are generally the 'data controller' under European data protection laws of the personal information described in this Privacy Notice, since we determine the means and/or purposes of the data processing we perform. This Privacy Notice does not apply to the personal information we process as a 'data processor' on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the 'data controller' responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers' privacy practices, you should read their privacy policies and direct any questions you have to them.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="whoshare" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following third parties.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text"><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ('<strong>third parties</strong>') who perform services for us or on our behalf and require access to such information to do that work.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">The third parties we may share personal information with are as follows:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>Communicate and Chat with Users</strong></span>
<div style="margin-left:40px;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">EmailJS</span></span></div></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>Functionality and Infrastructure Optimisation</strong></span>
<div style="margin-left:40px;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Cookiebot</span></span></div></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><strong>Website Hosting</strong></span>
<div style="margin-left:40px;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Github Pages and Vercel</span></span></div></li>
</ul>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">We also may need to share your personal information in the following situations:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></li>
</ul>
<div style="line-height:1.5;"><br></div>

<div id="cookies" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may use cookies and other tracking technologies to collect and store your information.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <a target="_blank" data-custom-class="link" href="https://quazarrsecurity.com/cookie-policy">https://quazarrsecurity.com/cookie-policy</a>.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="ai" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong>
<strong><em><span data-custom-class="body_text">In Short:</span></em></strong><em><span data-custom-class="body_text"> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</span></em></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, 'AI Products'). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><strong><span data-custom-class="body_text">Use of AI Technologies</span></strong></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">We provide the AI Products through third-party service providers ('AI Service Providers'), including Anthropic. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in '<a data-custom-class="link" href="#legalbases"><span style="color:rgb(0,58,250);">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></a>'. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><strong><span data-custom-class="body_text">Our AI Products</span></strong></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">Our AI Products are designed for the following functions:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;">Natural language processing</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;">AI document generation</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;">AI insights</span></li>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;">Text analysis</span></li>
</ul>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><strong><span data-custom-class="body_text">How We Process Your Data Using AI</span></strong></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><strong><span data-custom-class="body_text">How to Opt Out</span></strong></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">We believe in giving you the power to decide how your data is used. To opt out, you can:</span></span></div>
<ul>
<li data-custom-class="body_text" style="line-height:1.5;"><span style="font-size:15px;">Contact us using the contact information provided</span></li>
</ul>
<div style="line-height:1.5;"><br></div>

<div id="intltransfers" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may transfer, store, and process your information in countries other than your own.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Our servers are located in the United States. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see '<a data-custom-class="link" href="#whoshare"><span style="color:rgb(0,58,250);">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></a>' above), including facilities in the United States and other countries.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Safeguards for transfers out of the UK:</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Where personal information is transferred outside the United Kingdom, we rely on the UK International Data Transfer Agreement (IDTA), or the UK Addendum to the European Commission's Standard Contractual Clauses, as appropriate to the recipient. These require the recipient to protect personal information originating from the UK to UK data protection standards. Copies are available on request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="inforetain" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 1 year.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="infosafe" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We aim to protect your personal information through a system of organisational and technical security measures.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="infominors" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>10. DO WE COLLECT INFORMATION FROM MINORS?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We do not knowingly collect data from or market to children under 18 years of age.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a target="_blank" data-custom-class="link" href="mailto:hello@quazarrsecurity.com">hello@quazarrsecurity.com</a>.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="privacyrights" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>11. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section '<a data-custom-class="link" href="#contact"><span style="color:rgb(0,58,250);">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>' below.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a data-custom-class="link" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" rel="noopener noreferrer" target="_blank">Member State data protection authority</a> or <a data-custom-class="link" href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" rel="noopener noreferrer" target="_blank">UK data protection authority</a>.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">If you are located in Switzerland, you may contact the <a data-custom-class="link" href="https://www.edoeb.admin.ch/edoeb/en/home.html" rel="noopener noreferrer" target="_blank">Federal Data Protection and Information Commissioner</a>.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div id="withdrawconsent" style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section '<a data-custom-class="link" href="#contact"><span style="color:rgb(0,58,250);">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>' below.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: <a target="_blank" data-custom-class="link" href="https://quazarrsecurity.com/cookie-policy">https://quazarrsecurity.com/cookie-policy</a>.</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span data-custom-class="body_text"><span style="font-size:15px;">If you have questions or comments about your privacy rights, you may email us at <a target="_blank" data-custom-class="link" href="mailto:hello@quazarrsecurity.com">hello@quazarrsecurity.com</a>.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="DNT" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>12. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="policyupdates" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>13. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text"><em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="contact" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may email us at <a target="_blank" data-custom-class="link" href="mailto:hello@quazarrsecurity.com">hello@quazarrsecurity.com</a> or contact us by post at:</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Rowan Richard Roger Money<br>Flat 4, 7A St Catherines Road<br>Bournemouth, Dorset BH6 4AE<br>England</span></span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span data-custom-class="body_text" style="font-size:15px;">If you are a resident in the United Kingdom, we are the 'data controller' of your personal information. We have appointed Rowan Richard Roger Money to be our representative in the UK. You can contact them directly regarding our processing of your information, by email at <a target="_blank" data-custom-class="link" href="mailto:hello@quazarrsecurity.com">hello@quazarrsecurity.com</a>, by visiting <a target="_blank" data-custom-class="link" href="https://quazarrsecurity.com/">https://quazarrsecurity.com/</a>, by phone at 07526244565, or by post to:</span></div>
<div style="line-height:1.5;"><br></div>
<div style="line-height:1.5;"><span style="font-size:15px;"><span data-custom-class="body_text">Flat 4, 7A St Catherines Road<br>Bournemouth, Dorset BH6 4AE<br>England</span></span></div>
<div style="line-height:1.5;"><br></div>

<div id="request" style="line-height:1.5;"><strong><span data-custom-class="heading_1"><h2>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong>
<span style="font-size:15px;color:rgb(89,89,89);"><span data-custom-class="body_text">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a target="_blank" data-custom-class="link" href="https://quazarrsecurity.com/contact">https://quazarrsecurity.com/contact</a>.</span></span></div>

<div style="line-height:1.5;"><br></div>

</div>
`;

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-6 flex justify-center">Legal</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(40px,6vw,72px)] tracking-[0.04em] text-white mb-6 leading-none">
              Privacy Policy
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              How <span className="text-white font-medium">QuaZarR Security</span> collects,
              uses, and protects your personal information — in accordance with UK GDPR.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.14}>
            <p className="text-xs text-muted mt-6">Last updated: July 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      <section className="w-full py-16 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div
              className="bg-white p-8 lg:p-12"
              dangerouslySetInnerHTML={{ __html: termlyHTML }}
            />
          </AnimatedSection>

          <div className="text-center mt-12">
            <AnimatedSection>
              <Link
                href="/"
                className="inline-block text-xs font-bold uppercase tracking-[0.12em] text-red border border-red px-8 py-4 hover:bg-red hover:text-white transition-colors"
              >
                Back to Home
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
