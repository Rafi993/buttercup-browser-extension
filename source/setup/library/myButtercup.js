import { Credentials, MyButtercupClient } from "../../shared/library/buttercup.js";
import { dispatch, getState } from "../redux/index.js";
import { MYBUTTERCUP_CLIENT_ID } from "../../shared/library/myButtercup.js";

export function performAuthentication() {
    const url = MyButtercupClient.generateAuthorisationURL(MYBUTTERCUP_CLIENT_ID);
    chrome.tabs.create({ url });
}
