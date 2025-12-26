import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Level.scss";
import { gameModes } from "../../../utils/constant";
import { useEffect } from "react";

export const Level = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const headerBar = document.createElement('div');
		headerBar.id = 'mm-header-bar';
		document.body.appendChild(headerBar);

		window.onload = () => {
		if (window.WidgetApp_v1) {
			window.WidgetApp_v1.mount('mm-header-bar', {
			userId: 'victory' // add Your user ID
			});
		}
		};

		return () => {
			if (window.WidgetApp_v1 && window.WidgetApp_v1.unmount) {
				window.WidgetApp_v1.unmount();
			}
		};
	}, []);
	const machinePlayAction = ( aiLevel ) => {
		alert("Please connect wallet for playing this game!")
		// navigate('/gameScene', { state: { mode: gameModes['P2E'], aiLevel: aiLevel } });
	}

    return (
		<div className="selectLevel">
			<button class="connect-button" id="mm-widget-btn">
				Connect Wallet
			</button>
			<div className="u-container">
				<div className="u-ribbon">Choose Level</div>
				<div className="u-content">
					<div className="u-content-container">
						<div className="u-table-wrap">
							<div className="u-row">
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(0)}>AI MonKey</button>
								</div>
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(1)}>Beginner</button>
								</div>
							</div>
							<div className="u-row">
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(2)}>Intermediate</button>
								</div>
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(3)}>Advanced</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Level;