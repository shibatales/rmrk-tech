"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var link_1 = require("next/link");
var React = require("react");
var MotionBox_1 = require("components/MotionBox");
var consts_1 = require("utils/consts");
var useIpfsStore_1 = require("utils/useIpfsStore");
function GalleryNft(nft) {
    var _a;
    var _b = React.useState(''), ipfsImg = _b[0], setIpfsImg = _b[1];
    var url = nft.metadata.toString();
    var cidx = 12;
    var CID = url.slice(cidx, url.length);
    var nftLink = "/nft/" + CID;
    var imgSrc = consts_1.Gateway + CID;
    var res = useIpfsStore_1.useIpfsStore(React.useCallback(function (state) { return state.fetchIpfs; }, []));
    React.useEffect(function () {
        res(imgSrc);
    }, [imgSrc]);
    var store = useIpfsStore_1.useIpfsStore(React.useCallback(function (state) { return state.storedIpfs; }, []));
    React.useEffect(function () {
        var _a;
        var img = (_a = store[imgSrc]) === null || _a === void 0 ? void 0 : _a.image;
        if (typeof store[imgSrc] !== 'undefined' && img) {
            var srcUrl = consts_1.Gateway + img.slice(12, img.length);
            setIpfsImg(srcUrl);
        }
    }, [imgSrc, store, store[imgSrc], (_a = store[imgSrc]) === null || _a === void 0 ? void 0 : _a.image]);
    return (React.createElement(react_1.Stack, { spacing: { base: '3', md: '5' } },
        React.createElement(link_1["default"], { href: nftLink, passHref: true },
            React.createElement(MotionBox_1.MotionBox, { whileHover: { scale: 1.05, cursor: 'pointer' } },
                React.createElement(react_1.Box, { position: "relative", borderRadius: "md" },
                    React.createElement(react_1.AspectRatio, { ratio: 3 / 4 },
                        React.createElement(react_1.Image, { src: ipfsImg, alt: nft.name, fit: "contain", draggable: "false", fallback: React.createElement(react_1.Skeleton, { startColor: "brand.900", endColor: "brand.700" }) }))),
                React.createElement(react_1.Box, { minH: "90px", p: "3", textAlign: "left", bg: "brand.900", color: "brand.100", marginTop: "3px" },
                    React.createElement(react_1.Text, { fontSize: "xs", color: "#CCCCCC" }, nft.sn),
                    React.createElement(react_1.Text, { fontWeight: "bold" }, nft.name))))));
}
exports["default"] = GalleryNft;
