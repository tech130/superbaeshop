import { useLayoutEffect, useEffect } from "react";
import canUseDom from "../../utils/canUseDom";

export default canUseDom ? useLayoutEffect : useEffect;
