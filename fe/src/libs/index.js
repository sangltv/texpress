import * as M from "@mui/material"
import styled from "@emotion/styled"
console.log(M)
const _css = p => {
    const _a = [
        "animation",
        "animationName",
        "animationDuration",
        "animationDelay",
        "animationIterationCount",
        "animationDirection",
        "animationTimingFunction",
        "animationFillMode",
        "alignContent",
        "alignItems",
        "alignSelf",
        "aspectRatio",
        "backfaceVisibility",
        "backgroundColor",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomWidth",
        "borderColor",
        "borderLeftColor",
        "borderLeftWidth",
        "borderRadius",
        "borderRightColor",
        "borderRightWidth",
        "borderStyle",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "color",
        "cursor",
        "decomposedMatrix",
        "direction",
        "display",
        "elevation",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "height",
        "includeFontPadding",
        "justifyContent",
        "left",
        "letterSpacing",
        "lineHeight",
        "margin",
        "marginBottom",
        "marginHorizontal",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginVertical",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "opacity",
        "overflow",
        "overlayColor",
        "padding",
        "paddingBottom",
        "paddingHorizontal",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingVertical",
        "position",
        "resizeMode",
        "right",
        "rotation",
        "scaleX",
        "scaleY",
        "shadowColor",
        "shadowOffset",
        "shadowOpacity",
        "shadowRadius",
        "textAlign",
        "textAlignVertical",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle",
        "textShadowColor",
        "textShadowOffset",
        "textShadowRadius",
        "tintColor",
        "top",
        "transform",
        "transformMatrix",
        "translateX",
        "translateY",
        "width",
        "writingDirection",
        "zIndex",
        "border",
        "boxShadow",
        "flexFlow",
        "font",
        "textShadow",
        "textDecoration",
        "textDecorationLine",
        "transform",
        "bg",
        "size",
        "m", "mt", "mb", "ml", "mr", "mx", "my",
        "p", "pt", "pb", "pl", "pr", "px", "py",
        "backgroundImage",
        "backgroundSize",
        "backgroundPosition",
        "backgroundRepeat",
        "background",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundOrigin",
        "overflow",
        "transition",
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction",
        "grid",
        "gridArea",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridColumn",
        "gridColumnEnd",
        "gridColumnGap",
        "gridColumnStart",
        "gridGap",
        "gridRow",
        "gridRowEnd",
        "gridRowGap",
        "gridRowStart",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
    ]

    const _c = k => {
        switch (k) {
            case "bg": return "backgroundColor";
            case "m": return "margin";
            case "mt": return "marginTop";
            case "mr": return "marginRight";
            case "mb": return "marginBottom";
            case "ml": return "marginLeft";
            case "mx": return "marginX";
            case "my": return "marginY";
            case "p": return "padding";
            case "pt": return "paddingTop";
            case "pr": return "paddingRight";
            case "pb": return "paddingBottom";
            case "pl": return "paddingLeft";
            case "px": return "paddingX";
            case "py": return "paddingY";
            default: return k;
        }
    }

    return Object.keys(p)
        .filter(key => _a.includes(key))
        .filter(key => p[key] !== true)
        .filter(key => p[key] !== null)
        .reduce((obj, key) => {
            if (key === "size") {
                obj["width"] = p[key]
                obj["height"] = p[key]
            } else {
                obj[_c(key)] = p[key];
            }
            return obj;
        }, {});
}

const Mbox = props => <M.Box {...props} sx={_css(props)} />

const Box = styled('div')(props => _css(props))

export const Div = (props) => <Mbox {...props}/>
export const Button = props => <Mbox as={M.Button} {...props} />
export const Autocomplete = props => <Mbox as={M.Autocomplete} {...props} />
export const ButtonGroup = props => <Mbox as={M.ButtonGroup} {...props} />

//wait edit
export const H1 = props => <Box as={'h1'} {...props} />
export const H2 = props => <Box as={'h2'} {...props} />
export const H3 = props => <Box as={'h3'} {...props} />
export const H4 = props => <Box as={'h4'} {...props} />
export const H5 = props => <Box as={'h5'} {...props} />
export const H6 = props => <Box as={'h6'} {...props} />

export const A = props => <Box as={'a'} {...props} />
export const Abbr = props => <Box as={'abbr'} {...props} />
export const Address = props => <Box as={'address'} {...props} />
export const Area = props => <Box as={'area'} {...props} />
export const Article = props => <Box as={'article'} {...props} />
export const Aside = props => <Box as={'aside'} {...props} />
export const Audio = props => <Box as={'audio'} {...props} />
export const B = props => <Box as={'b'} {...props} />
export const Base = props => <Box as={'base'} {...props} />
export const Bdi = props => <Box as={'bdi'} {...props} />
export const Bdo = props => <Box as={'bdo'} {...props} />
export const Blockquote = props => <Box as={'blockquote'} {...props} />
export const Body = props => <Box as={'body'} {...props} />
export const Br = props => <Box as={'br'} {...props} />
export const Canvas = props => <Box as={'canvas'} {...props} />
export const Caption = props => <Box as={'caption'} {...props} />
export const Cite = props => <Box as={'cite'} {...props} />
export const Code = props => <Box as={'code'} {...props} />
export const Col = props => <Box as={'col'} {...props} />
export const Colgroup = props => <Box as={'colgroup'} {...props} />
export const Data = props => <Box as={'data'} {...props} />
export const Datalist = props => <Box as={'datalist'} {...props} />
export const Dd = props => <Box as={'dd'} {...props} />
export const Del = props => <Box as={'del'} {...props} />
export const Details = props => <Box as={'details'} {...props} />
export const Dfn = props => <Box as={'dfn'} {...props} />
export const Dialog = props => <Box as={'dialog'} {...props} />
export const Dl = props => <Box as={'dl'} {...props} />
export const Dt = props => <Box as={'dt'} {...props} />
export const Em = props => <Box as={'em'} {...props} />
export const Embed = props => <Box as={'embed'} {...props} />
export const Fieldset = props => <Box as={'fieldset'} {...props} />
export const Figcaption = props => <Box as={'figcaption'} {...props} />
export const Figure = props => <Box as={'figure'} {...props} />
export const Footer = props => <Box as={'footer'} {...props} />
export const Form = props => <Box as={'form'} {...props} />

export const Head = props => <Box as={'head'} {...props} />
export const Header = props => <Box as={'header'} {...props} />
export const Hgroup = props => <Box as={'hgroup'} {...props} />
export const Hr = props => <Box as={'hr'} {...props} />
export const Html = props => <Box as={'html'} {...props} />
export const I = props => <Box as={'i'} {...props} />
export const Iframe = props => <Box as={'iframe'} {...props} />
export const Img = props => <Box as={'img'} {...props} />
export const Input = props => <Box as={'input'} {...props} />
export const Ins = props => <Box as={'ins'} {...props} />
export const Kbd = props => <Box as={'kbd'} {...props} />
export const Label = props => <Box as={'label'} {...props} />
export const Legend = props => <Box as={'legend'} {...props} />
export const Li = props => <Box as={'li'} {...props} />
export const Link = props => <Box as={'link'} {...props} />
export const Main = props => <Box as={'main'} {...props} />
export const Mark = props => <Box as={'mark'} {...props} />
export const Menu = props => <Box as={'menu'} {...props} />
export const Menuitem = props => <Box as={'menuitem'} {...props} />
export const Meta = props => <Box as={'meta'} {...props} />
export const Meter = props => <Box as={'meter'} {...props} />
export const Nav = props => <Box as={'nav'} {...props} />
export const Noscript = props => <Box as={'noscript'} {...props} />
export const Ol = props => <Box as={'ol'} {...props} />
export const Optgroup = props => <Box as={'optgroup'} {...props} />
export const Option = props => <Box as={'option'} {...props} />
export const Output = props => <Box as={'output'} {...props} />
export const P = props => <Box as={'p'} {...props} />
export const Param = props => <Box as={'param'} {...props} />
export const Picture = props => <Box as={'picture'} {...props} />
export const Pre = props => <Box as={'pre'} {...props} />
export const Progress = props => <Box as={'progress'} {...props} />
export const Q = props => <Box as={'q'} {...props} />
export const Rb = props => <Box as={'rb'} {...props} />
export const Rp = props => <Box as={'rp'} {...props} />
export const Rt = props => <Box as={'rt'} {...props} />
export const Rtc = props => <Box as={'rtc'} {...props} />
export const Ruby = props => <Box as={'ruby'} {...props} />
export const S = props => <Box as={'s'} {...props} />
export const Samp = props => <Box as={'samp'} {...props} />
export const Script = props => <Box as={'script'} {...props} />
export const Section = props => <Box as={'section'} {...props} />
export const Select = props => <Box as={'select'} {...props} />
export const Slot = props => <Box as={'slot'} {...props} />
export const Small = props => <Box as={'small'} {...props} />
export const Source = props => <Box as={'source'} {...props} />
export const Span = props => <Box as={'span'} {...props} />
export const Strong = props => <Box as={'strong'} {...props} />
export const Style = props => <Box as={'style'} {...props} />
export const Sub = props => <Box as={'sub'} {...props} />
export const Summary = props => <Box as={'summary'} {...props} />
export const Sup = props => <Box as={'sup'} {...props} />
export const Svg = props => <Box as={'svg'} {...props} />
export const Table = props => <Box as={'table'} {...props} />
export const Tbody = props => <Box as={'tbody'} {...props} />
export const Td = props => <Box as={'td'} {...props} />
export const Template = props => <Box as={'template'} {...props} />
export const Textarea = props => <Box as={'textarea'} {...props} />
export const Tfoot = props => <Box as={'tfoot'} {...props} />
export const Th = props => <Box as={'th'} {...props} />
export const Thead = props => <Box as={'thead'} {...props} />
export const Time = props => <Box as={'time'} {...props} />
export const Title = props => <Box as={'title'} {...props} />
export const Tr = props => <Box as={'tr'} {...props} />
export const Track = props => <Box as={'track'} {...props} />
export const U = props => <Box as={'u'} {...props} />
export const Ul = props => <Box as={'ul'} {...props} />
export const Var = props => <Box as={'var'} {...props} />
export const Video = props => <Box as={'video'} {...props} />
export const Wbr = props => <Box as={'wbr'} {...props} />
